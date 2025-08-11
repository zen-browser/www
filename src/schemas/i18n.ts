import { type } from 'arktype'

/**
 * Defines the schema for the i18n object.
 */
export const i18nSchema = type
  .scope({
    Title: type({
      text: 'string',
      highlight: 'boolean',
    }),

    Hero: {
      title: 'Title[]',
      description: 'string[]',
      buttons: {
        beta: 'string',
        support: 'string',
      },
    },

    Feature: type({
      title: 'string',
      description: 'string',
    }),

    Sponsor: type({
      name: 'string',
      url: 'string',
    }),

    ValuesListEntry: type({
      title: 'string',
      description: 'string',
    }),

    Image: type({
      alt: 'string',
    }),

    Member: type({
      name: 'string',
      description: 'string',
      link: 'string|false',
    }),

    Donation: type({
      title: 'string',
      description: 'string',
      button: 'string',
    }),

    Routes: {
      index: {
        title: 'string',
        hero: 'Hero',
        features: {
          titles: 'string[]',
          description: 'string',
          featureTabs: {
            workspaces: 'Feature',
            compactMode: 'Feature',
            glance: 'Feature',
            splitView: 'Feature',
          },
        },
        sponsors: {
          title: 'string',
          description: 'string',
          sponsors: {
            tuta: 'Sponsor',
            blacksmith: 'Sponsor',
            crowdin: 'Sponsor',
          },
        },
        community: {
          title: 'string[]',
          description: 'string',
          lists: {
            freeAndOpenSource: 'ValuesListEntry',
            simpleYetPowerful: 'ValuesListEntry',
            privateAndAlwaysUpToDate: 'ValuesListEntry',
          },
          images: {
            community: 'Image',
          },
        },
      },
      mods: {
        title: 'string',
        description: 'string',
        pagination: {
          pagination: 'string',
        },
        search: 'string',
        by: 'string',
        sort: {
          lastCreated: 'string',
          lastUpdated: 'string',
          perPage: 'string',
        },
        noResults: 'string',
        noResultsDescription: 'string',
        slug: {
          title: 'string',
          description: 'string',
          alert: {
            description: 'string',
            button: 'string',
          },
          createdBy: 'string',
          creationDate: 'string',
          latestUpdate: 'string',
          visitModHomepage: 'string',
          installMod: 'string',
          uninstallMod: 'string',
          back: 'string',
        },
      },
      releaseNotes: {
        topSection: {
          title: 'string',
          description: 'string',
        },
        list: {
          support: 'string',
          navigateToVersion: 'string',
        },
        itemType: {
          fix: 'string',
          feature: 'string',
          known: 'string',
          break: 'string',
          theme: 'string',
          security: 'string',
          change: 'string',
        },
        backToTop: 'string',
        chooseVersion: 'string',
        components: {
          releaseNoteItem: {
            twilight: 'string',
            twilightChanges: 'string',
            releaseChanges: 'string',
            firefoxVersion: 'string',
            githubRelease: 'string',
            workflowRun: 'string',
            compareChanges: 'string',
            twilightWarning: 'string',
            reportIssues: 'string',
            learnMore: 'string',
            viewIssue: 'string',
          },
        },
        slug: {
          title: 'string',
          redirect: 'string',
        },
      },
      about: {
        title: 'string',
        description: 'string',
        littleHelp: 'string',
        mainTeam: {
          title: 'string',
          description: 'string',
          subTitle: {
            browser: 'string',
            website: 'string',
          },
          members: {
            browser: {
              mauro: 'Member',
              jan: 'Member',
              bryan: 'Member',
              oscar: 'Member',
              daniel: 'Member',
              brhm: 'Member',
              kristijanribaric: 'Member',
              larvey: 'Member',
              studio: 'Member',
            },
            website: {
              taroj1205: 'Member',
              jace: 'Member',
              canoa: 'Member',
              adam: 'Member',
              n7itro: 'Member',
              jafeth: 'Member',
            },
          },
        },
        contributors: {
          title: 'string',
          description: 'string',
          browser: 'string',
          website: 'string',
        },
      },
      donate: {
        title: 'string',
        description: 'string',
        patreon: 'Donation',
        koFi: 'Donation',
      },
      download: {
        title: 'string',
        description: 'string',
        twilightInfo: 'string',
        beta: 'string',
        otherDownload: 'string',
        alertInfo: {
          description: 'string',
        },
        platformSelector: {
          title: 'string',
          description: 'string',
        },
        additionalResources: {
          title: 'string',
          sourceCode: {
            title: 'string',
            description: 'string',
          },
          documentation: {
            title: 'string',
            description: 'string',
          },
        },
        securityNotice: {
          title: 'string',
          description: 'string',
        },
        platformNames: {
          mac: 'string',
          windows: 'string',
          linux: 'string',
        },
        platformDescriptions: {
          mac: 'string',
          windows: 'string',
          linux: 'string',
        },
        links: {
          macos: {
            universal: 'string',
          },
          windows: {
            '64bit': 'string',
            ARM64: 'string',
          },
          linux: {
            flathub: 'string',
            x86_64: 'string',
            aarch64: 'string',
          },
        },
        buttonCard: {
          copy: 'string',
          showChecksum: 'string',
          beta: 'string',
        },
      },
      privacyPolicy: {
        title: 'string',
        lastUpdated: 'string',
        sections: {
          introduction: {
            title: 'string',
            body: 'string',
            summary: 'string',
          },
          noCollect: {
            title: 'string',
            body: 'string',
          },
          noTelemetry: {
            title: 'string',
            body: 'string',
            body2: 'string',
          },
          noPersonalData: {
            title: 'string',
            body: 'string',
          },
          noThirdParty: {
            title: 'string',
            body: 'string',
          },
          externalConnections: {
            title: 'string',
            body: 'string',
          },
          localStorage: {
            title: 'string',
          },
          browsingData: {
            title: 'string',
            body: 'string',
          },
          cookies: {
            title: 'string',
            body: 'string',
          },
          cache: {
            title: 'string',
            body: 'string',
          },
          settings: {
            title: 'string',
            body: 'string',
          },
          sync: {
            title: 'string',
            body: 'string',
            link1: 'string',
            link2: 'string',
          },
          addons: {
            title: 'string',
            body: 'string',
          },
          security: {
            title: 'string',
            body: 'string',
            note: 'string',
          },
          control: {
            title: 'string',
            deletionTitle: 'string',
            deletionBody: 'string',
          },
          website: {
            title: 'string',
            body: 'string',
            externalLinksTitle: 'string',
            externalLinksBody: 'string',
          },
          changes: {
            title: 'string',
            body: 'string',
          },
          otherTelemetry: {
            title: 'string',
            body: 'string',
            firefoxPrivacyNotice: 'string',
            forMoreInformation: 'string',
          },
          contact: {
            title: 'string',
            body: 'string',
            discord: 'string',
            discordLink: 'string',
            github: 'string',
            githubLink: 'string',
          },
        },
      },
      welcome: {
        title: 'string[]',
      },
      whatsNew: {
        title: 'string',
        reportIssue: 'string',
        joinDiscord: 'string',
        readFullReleaseNotes: 'string',
      },
      notFound: {
        title: 'string',
        description: 'string',
        button: 'string',
      },
    },

    Page: type({
      title: 'string',
      description: 'string?',
    }),

    Layout: {
      index: 'Page',
      mods: 'Page',
      releaseNotes: 'Page',
      about: 'Page',
      donate: 'Page',
      download: 'Page',
      privacyPolicy: 'Page',
      welcome: 'Page',
      whatsNew: 'Page',
    },

    Components: type({
      footer: {
        title: 'string',
        description: 'string',
        download: 'string',
        followUs: 'string',
        aboutUs: 'string',
        teamAndContributors: 'string',
        privacyPolicy: 'string',
        getStarted: 'string',
        documentation: 'string',
        zenMods: 'string',
        releaseNotes: 'string',
        getHelp: 'string',
        discord: 'string',
        uptimeStatus: 'string',
        reportAnIssue: 'string',
        security: 'string',
        twilight: 'string',
        madeWith: 'string',
      },
      nav: {
        brand: 'string',
        menu: {
          gettingStarted: 'string',
          usefulLinks: 'string',
          mods: 'string',
          download: 'string',
          discord: 'string',
          releaseNotes: 'string',
          zenMods: 'string',
          tryZenMods: 'string',
          zenModsDesc: 'string',
          releaseNotesDesc: 'string',
          discordDesc: 'string',
          donate: 'string',
          donateDesc: 'string',
          aboutUs: 'string',
          aboutUsDesc: 'string',
          documentation: 'string',
          documentationDesc: 'string',
          github: 'string',
          githubDesc: 'string',
          menu: 'string',
        },
      },
    }),

    I18n: {
      routes: 'Routes',
      layout: 'Layout',
      components: 'Components',
    },
  })
  .export('I18n')
