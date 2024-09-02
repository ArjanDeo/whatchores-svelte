export type WoWToken = {
    _links: {
      self: {
        href: string
      }
    }
    last_updated_timestamp: number
    price: number
  }
  interface Affix {
    id: number;
    name: string;
}
export type Affixes = {
  region: string
  title: string
  leaderboard_url: string
  affix_details: Array<{
    id: number
    name: string
    description: string
    icon: string
    wowhead_url: string
  }>
}

export interface Post {
    title: string,
    description: string,
    link: string,
    image: string
}
export type CharacterData = {
  raiderIOCharacterData: {
    name: string
    race: string
    char_class: string
    active_spec_name: string
    active_spec_role: string
    gender: string
    faction: string
    achievement_points: number
    honorable_kills: number
    thumbnail_url: string
    region: string
    realm: string
    last_crawled_at: string
    profile_url: string
    profile_banner: string
    mythic_plus_weekly_highest_level_runs: Array<{
      dungeon: string;
      short_name: string;
      mythic_level: number;
      completed_at: Date;
      clear_time_ms: number;
      par_time_ms: number;
      num_keystone_upgrades: number;
      map_challenge_mode_id: number;
      zone_id: number;
      score: number;
      affixes: Affix[];
      url: string;
    }>
    mythic_plus_scores_by_season: Array<{
      season: string
      scores: {
        all: number
        dps: number
        healer: number
        tank: number
        spec_0: number
        spec_1: number
        spec_2: number
        spec_3: number
      }
      segments: {
        all: {
          score: number
          color: string
        }
        dps: {
          score: number
          color: string
        }
        healer: {
          score: number
          color: string
        }
        tank: {
          score: number
          color: string
        }
        spec_0: {
          score: number
          color: string
        }
        spec_1: {
          score: number
          color: string
        }
        spec_2: {
          score: number
          color: string
        }
        spec_3: {
          score: number
          color: string
        }
      }
    }>
    gear: {
      updated_at: string
      item_level_equipped: number
      artifact_traits: number
      corruption: {
        added: number
        resisted: number
        total: number
        cloakRank: number
        spells: Array<unknown>
      }
      items: {
        head: {
          item_id: number
          item_level: number
          icon: string
          name: string
          item_quality: number
          is_legendary: boolean
          is_azerite_armor: boolean
          azerite_powers: Array<
            | {
                id: Array<unknown>
                spell: Array<Array<Array<unknown>>>
                tier: Array<unknown>
              }
            | undefined
          >
          corruption: {
            added: number
            resisted: number
            total: number
            cloakRank: number
            spells: unknown
          }
          domination_shards: Array<unknown>
          gems: Array<number>
          bonuses: Array<number>
        }
        neck: {
          item_id: number
          item_level: number
          icon: string
          name: string
          item_quality: number
          is_legendary: boolean
          is_azerite_armor: boolean
          azerite_powers: Array<unknown>
          corruption: {
            added: number
            resisted: number
            total: number
            cloakRank: number
            spells: unknown
          }
          domination_shards: Array<unknown>
          gems: Array<number>
          bonuses: Array<number>
        }
        shoulder: {
          item_id: number
          item_level: number
          icon: string
          name: string
          item_quality: number
          is_legendary: boolean
          is_azerite_armor: boolean
          azerite_powers: Array<
            | {
                id: number
                spell: {
                  id: number
                  school: number
                  icon: string
                  name: string
                  rank: unknown
                }
                tier: number
              }
            | undefined
          >
          corruption: {
            added: number
            resisted: number
            total: number
            cloakRank: number
            spells: unknown
          }
          domination_shards: Array<unknown>
          tier: unknown
          gems: Array<unknown>
          bonuses: Array<number>
        }
        back: {
          item_id: number
          item_level: number
          icon: string
          name: string
          item_quality: number
          is_legendary: boolean
          is_azerite_armor: boolean
          azerite_powers: Array<unknown>
          corruption: {
            added: number
            resisted: number
            total: number
            cloakRank: number
            spells: unknown
          }
          domination_shards: Array<unknown>
          gems: Array<unknown>
          bonuses: Array<number>
        }
        chest: {
          item_id: number
          item_level: number
          icon: string
          name: string
          item_quality: number
          is_legendary: boolean
          is_azerite_armor: boolean
          azerite_powers: Array<
            | {
                id: number
                spell: {
                  id: number
                  school: number
                  icon: string
                  name: string
                  rank: unknown
                }
                tier: number
              }
            | undefined
          >
          corruption: {
            added: number
            resisted: number
            total: number
            cloakRank: number
            spells: unknown
          }
          domination_shards: Array<unknown>
          tier: string
          gems: Array<unknown>
          bonuses: Array<number>
        }
        waist: {
          item_id: number
          item_level: number
          icon: string
          name: string
          item_quality: number
          is_legendary: boolean
          is_azerite_armor: boolean
          azerite_powers: Array<unknown>
          corruption: {
            added: number
            resisted: number
            total: number
            cloakRank: number
            spells: unknown
          }
          domination_shards: Array<unknown>
          gems: Array<number>
          bonuses: Array<number>
        }
        wrist: {
          item_id: number
          item_level: number
          icon: string
          name: string
          item_quality: number
          is_legendary: boolean
          is_azerite_armor: boolean
          azerite_powers: Array<unknown>
          corruption: {
            added: number
            resisted: number
            total: number
            cloakRank: number
            spells: unknown
          }
          domination_shards: Array<unknown>
          gems: Array<number>
          bonuses: Array<number>
        }
        hands: {
          item_id: number
          item_level: number
          icon: string
          name: string
          item_quality: number
          is_legendary: boolean
          is_azerite_armor: boolean
          azerite_powers: Array<unknown>
          corruption: {
            added: number
            resisted: number
            total: number
            cloakRank: number
            spells: unknown
          }
          domination_shards: Array<unknown>
          tier: string
          gems: Array<unknown>
          bonuses: Array<number>
        }
        legs: {
          item_id: number
          item_level: number
          icon: string
          name: string
          item_quality: number
          is_legendary: boolean
          is_azerite_armor: boolean
          azerite_powers: Array<unknown>
          corruption: {
            added: number
            resisted: number
            total: number
            cloakRank: number
            spells: unknown
          }
          domination_shards: Array<unknown>
          tier: string
          gems: Array<unknown>
          bonuses: Array<number>
        }
        feet: {
          item_id: number
          item_level: number
          icon: string
          name: string
          item_quality: number
          is_legendary: boolean
          is_azerite_armor: boolean
          azerite_powers: Array<unknown>
          corruption: {
            added: number
            resisted: number
            total: number
            cloakRank: number
            spells: unknown
          }
          domination_shards: Array<unknown>
          gems: Array<unknown>
          bonuses: Array<number>
        }
        finger1: {
          item_id: number
          item_level: number
          icon: string
          name: string
          item_quality: number
          is_legendary: boolean
          is_azerite_armor: boolean
          azerite_powers: Array<unknown>
          corruption: {
            added: number
            resisted: number
            total: number
            cloakRank: number
            spells: unknown
          }
          domination_shards: Array<unknown>
          gems: Array<number>
          bonuses: Array<number>
        }
        finger2: {
          item_id: number
          item_level: number
          icon: string
          name: string
          item_quality: number
          is_legendary: boolean
          is_azerite_armor: boolean
          azerite_powers: Array<unknown>
          corruption: {
            added: number
            resisted: number
            total: number
            cloakRank: number
            spells: unknown
          }
          domination_shards: Array<unknown>
          gems: Array<number>
          bonuses: Array<number>
        }
        trinket1: {
          item_id: number
          item_level: number
          icon: string
          name: string
          item_quality: number
          is_legendary: boolean
          is_azerite_armor: boolean
          azerite_powers: Array<unknown>
          corruption: {
            added: number
            resisted: number
            total: number
            cloakRank: number
            spells: unknown
          }
          domination_shards: Array<unknown>
          gems: Array<unknown>
          bonuses: Array<number>
        }
        trinket2: {
          item_id: number
          item_level: number
          icon: string
          name: string
          item_quality: number
          is_legendary: boolean
          is_azerite_armor: boolean
          azerite_powers: Array<unknown>
          corruption: {
            added: number
            resisted: number
            total: number
            cloakRank: number
            spells: unknown
          }
          domination_shards: Array<unknown>
          gems: Array<unknown>
          bonuses: Array<number>
        }
        mainhand: {
          item_id: number
          item_level: number
          icon: string
          name: string
          item_quality: number
          is_legendary: boolean
          is_azerite_armor: boolean
          azerite_powers: Array<unknown>
          corruption: {
            added: number
            resisted: number
            total: number
            cloakRank: number
            spells: unknown
          }
          domination_shards: Array<unknown>
          gems: Array<unknown>
          bonuses: Array<number>
        }
        offhand: unknown
      }
    }
    raid_progression: {
      aberrustheshadowedcrucible: unknown
      amirdrassilthedreamshope: unknown
      vaultoftheincarnates: unknown
    }
    guild: {
      name: string
      realm: string
    }
  }
  raidBossesKilledThisWeek: Array<{
    boss: string
    difficulty: string
  }>
  dungeonVaultSlots: number[]
  classColor: string
  characterMedia: Array<{
    type: string
    link: string
  }>
}
export type RaidData = Array<{
  Boss: string
  Difficulty: string
}>
export type Realms = Array<{
  realmName: string
}>
