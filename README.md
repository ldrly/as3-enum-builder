## Usage

`npm install -g ldrly/as3-enum-builder` once to install, and use the `as3enum` commandline tool.
Or clone this repository and `npm install`, `npm link` to add `as3enum` to your path.

Edit `enum.json` to describe the desired enum, or provide your own file. Use of the `.enumdef` file extension is optional.

Run `as3enum [file.enumdef]` to generate the code.

## Features

* Enum values are constant, comparison is by reference (fast) and not by string
* Impossible to add/change/remove any enum values at runtime
* Access to underlying int value as well as string description at any time
* Casts nicely to string
* Can be looked up by both description and int with static `parse()` and `fromValue()`

## Sample

Input:

```json
{
	"name": "OsEnum",
	"package": "com.example",
	"values": [
		"Mac",
		"Windows",
		"Linux"
	]
}
```


Output:

```javascript
package com.example
{
	/**
	 * Generated by `as3enum`
	 * @see https://github.com/ldrly/as3-enum-builder
	 */
	public final class OsEnum
	{
		private static var _sealed:Boolean = false;
		private static const _all:Vector.<OsEnum> = new <OsEnum>[];


		public static const MAC:OsEnum = new OsEnum(0, "Mac");

		public static const WINDOWS:OsEnum = new OsEnum(1, "Windows");

		public static const LINUX:OsEnum = new OsEnum(2, "Linux");


		public static function fromValue(i:int):OsEnum
		{
			for each (var n:OsEnum in _all)
			{
				if (n.value == i) return n;
			}
			return null;
		}

		public static function parse(str:String):OsEnum
		{
			for each (var n:OsEnum in _all)
			{
				if (n.description == str) return n;
			}
			return null;
		}

		private var _value:int;
		public function get value():int { return _value; }

		private var _description:String;
		public function get description():String { return _description; }

		function OsEnum(value:int, description:String)
		{
			if (_sealed) throw new TypeError("Enum is sealed");
			this._value = value;
			this._description = description;
			_all.push(this);
		}

		public function toString():String { return _description; }

		_sealed = true;
	}
}
```

