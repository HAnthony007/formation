export const LANGAGE_VERSIONS = {
    bash: "5.2.0",
    c: "10.2.0",
    csharp: "6.12.0",
    go: "1.16.2",
    haskell: "9.0.1",
    html: "1.0.0",
    java: "15.0.2",
    javascript: "18.15.0",
    lua: "5.4.4",
    php: "8.2.3",
    python: "3.10.0",
    ruby: "3.0.1",
    rust: "1.68.2",
    typescript: "5.0.3",
    zig: "0.10.1",
};

export const CODE_SNIPPETS = {
    bash: `\necho "Hello, World in Bash"\n`,
    c: 'int main() {\n\tprintf("Hello World in C\\n");\n\treturn 0;\n}',
    csharp:
        'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
    go: 'package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello World in Go")\n}',
    haskell: 'main :: IO ()\nmain = putStrLn "Hello World in Haskell"\n',
    html:
        "<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<title>Hello World</title>\n\t</head>\n\t<body>\n\t\t<h1>Hello World in HTML</h1>\n\t</body>\n</html>\n",
    java:
        `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
    javascript:
        `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n`,

    lua: 'print("Hello World in Lua")\n',
    php: "<?php\n\n$name = 'Alex';\necho $name;\n",
    python:
        `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`,

    ruby: 'puts "Hello World in Ruby"\n',
    rust: 'fn main() {\n\tprintln!("Hello World in Rust");\n}',
    typescript:
        `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Alex" });\n`,
    zig: 'const stdout = std.io.getStdOut().writer();\n\npub fn main() !void {\n\ttry stdout.print("Hello World in Zig\\n", .{}) catch unreachable;\n}',
};
