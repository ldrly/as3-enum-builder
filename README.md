## Usage

`npm install -g https://github.com/ldrly/as3-enum-builder.git` once to install, and use the `as3enum` commandline tool.
Or clone this repository and `npm install`, `npm link` to add `as3enum` to your path.

Edit `enum.json` to describe the desired enum, or provide your own file. Use of the `.enumdef` file extension is optional.

Run `as3enum [file.enumdef]` to generate the code.

## Sample

Input:

```json
{
	"name": "OsEnum",
	"values": [
		"Mac",
		"Windows",
		"Linux"
	]
}
```


Output:

```javascript
final class OsEnum {
	public static function get MAC():OsEnum { return new OsEnum(0, "Mac", new Z()); }

	public static function get WINDOWS():OsEnum { return new OsEnum(1, "Windows", new Z()); }

	public static function get LINUX():OsEnum { return new OsEnum(2, "Linux", new Z()); }


	private var _value:int;
	public function get value():int { return _value; }

	private var _description:String;
	public function get description():String { return _description; }

	public function OsEnum(value:int, description:String, _:Z)
	{
		this._value = value;
		this._description = description;
	}

	public function toString() { return _description; }
}
class Z {}

```

