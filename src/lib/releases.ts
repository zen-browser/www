export const releases: any = {
    WindowsInstaller: "zen.installer.exe",
    WindowsInstallerGeneric: "zen.installer-generic.exe",
    
    WindowsZip: "zen.win-specific.zip",
    WindowsZipGeneric: "zen.win-generic.zip",

    MacOS: "zen.macos-aarch64.dmg",
    MacOSIntel: "zen.macos-x64.dmg",

    Linux: "zen.linux-specific.tar.bz2",
    LinuxGeneric: "zen.linux-generic.tar.bz2",

    LinuxAppImage: "zen-specific.AppImage",
    LinuxAppImageGeneric: "zen-generic.AppImage",
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
