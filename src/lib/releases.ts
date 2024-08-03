export const releases: any = {
    WindowsInstaller: "zen.installer.exe",
    WindowsInstallerGeneric: "zen.installer.exe",
    
    WindowsZip: "zen.win64.zip",
    WindowsZipGeneric: "zen.win64.zip",

    MacOS: "zen.macos.dmg",
    MacOSIntel: "zen.macos.dmg",

    Linux: "zen.linux.tar.bz2",
    LinuxGeneric: "zen.linux.tar.bz2",

    LinuxAppImage: "zen.AppImage",
    LinuxAppImageGeneric: "zen.AppImage",
};

// platform
//  -> arch
//      -> file
export const releaseTree: any = {
    windows: {
        specific: {
            installer: "WindowsInstaller",
            portable: "WindowsZip",
        },
        generic: {
            installer: "WindowsInstallerGeneric",
            portable: "WindowsZipGeneric",
        },
    },
    macos: {
        generic: "MacOSIntel",
        specific: "MacOS",
    },
    linux: {
        specific: {
            portable: "Linux",
            appimage: "LinuxAppImage",
        },
        generic: {
            portable: "LinuxGeneric",
            appimage: "LinuxAppImageGeneric",
        },
    },
};
