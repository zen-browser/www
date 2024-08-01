export const releases: any = {
    WindowsInstaller: "zen.installer-x64.exe",
    WindowsInstaller32: "zen.installer-x32.exe",
    
    WindowsZip: "zen.win-x64.zip",
    WindowsZip32: "zen.win-x32.zip",

    MacOS: "zen.macos-aarch64.dmg",
    MacOSIntel: "zen.macos-x64.dmg",

    Linux: "zen.linux-x64.tar.bz2",
    Linux32: "zen.linux-x32.tar.bz2",

    LinuxAppImage: "zen-x64.AppImage",
    LinuxAppImage32: "zen-x32.AppImage",
};

// platform
//  -> arch
//      -> file
export const releaseTree: any = {
    windows: {
        x64: {
            installer: "WindowsInstaller",
            portable: "WindowsZip",
        },
        x32: {
            installer: "WindowsInstaller32",
            portable: "WindowsZip32",
        },
    },
    macos: {
        x64: "MacOSIntel",
        arm: "MacOS",
    },
    linux: {
        x64: {
            portable: "Linux",
            appimage: "LinuxAppImage",
        },
        x32: {
            portable: "Linux32",
            appimage: "LinuxAppImage32",
        },
    },
};
