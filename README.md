## Usage

`npm install` once to install.

Edit `enum.json` to describe the desired enum.

Run `node main.js` to generate the code.

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

