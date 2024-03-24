let
  pkgs = import <nixpkgs> {};
in
  pkgs.mkShell {
    packages = [
      pkgs.nodejs_latest
      pkgs.nodePackages_latest.typescript-language-server
    ];
  }
