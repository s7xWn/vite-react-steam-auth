import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import InventoryGrid from "./InventoryGrid";

const API_URL = import.meta.env.VITE_BACKEND_URL;

type SteamProfile = {
  steamId: string;
  username: string;
  avatar: string | null;
  profileUrl?: string;
};


export default function ProfilePage() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState<SteamProfile | null>(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inventoryError, setInventoryError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadProfile() {
      try {
        const response = await fetch(`${API_URL}/auth/me`, {
          credentials: "include",
        });

        if (response.status === 401) {
          navigate("/login", { replace: true });
          return;
        }

        if (!response.ok) {
          throw new Error("Не удалось загрузить профиль");
        }

        const user: SteamProfile = await response.json();

        if (cancelled) return;
        setProfile(user);

        try {
          // const inventoryResponse = await fetch(`${API_URL}/me/inventory`, {
          //   credentials: "include",
          // });

          // if (!inventoryResponse.ok) {
          //   throw new Error("Не удалось загрузить инвентарь");
          // }

          // const inventory = await inventoryResponse.json();

          // console.log(inventory.descriptions);
          const inventory = {
            descriptions: [
              {
                appid: 730,
                classid: "1989308919",
                instanceid: "302028390",
                currency: 0,
                background_color: "393b3e",
                icon_url:
                  "IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdB2ozio1RrlIWFK3UfvMYB8UsvjiMXojflsZalyxSh31CIyHz2GZ-KuFpPsrTzBG0pO-CI3z2eCfdYXbfSA5rTuZXPGrQ-TSs5-vGETicRL4tEA9VL_ZV9WUfPJvbOxZr0IUVu2u_0UdyEhk6f9BKZAarxm1OM-xxzHUW3exq6-g",
                descriptions: [
                  {
                    type: "html",
                    value:
                      "This is a sealed container of a graffiti pattern. Once this graffiti pattern is unsealed, it will provide you with enough charges to apply the graffiti pattern <b>50</b> times to the in-game world.",
                    name: "description",
                  },
                  {
                    type: "html",
                    value: " ",
                    name: "blank",
                  },
                ],
                tradable: 1,
                actions: [
                  {
                    link: "steam://run/730//+csgo_econ_action_preview%20DDCDDDC519D7FDDDF5DCEDD9BFDAD5DDCD76D0EDDFB5DDADC5240E3921",
                    name: "Inspect in Game...",
                  },
                ],
                name: "Sealed Graffiti | Mr. Teeth (Blood Red)",
                name_color: "b0c3d9",
                type: "Base Grade Graffiti",
                market_name: "Sealed Graffiti | Mr. Teeth (Blood Red)",
                market_hash_name: "Sealed Graffiti | Mr. Teeth (Blood Red)",
                market_actions: [
                  {
                    link: "steam://run/730//+csgo_econ_action_preview%20DDCDDDC519D7FDDDF5DCEDD9BFDAD5DDCD76D0EDDFB5DDADC5240E3921",
                    name: "Inspect in Game...",
                  },
                ],
                commodity: 1,
                market_tradable_restriction: 7,
                market_marketable_restriction: 7,
                marketable: 1,
                tags: [
                  {
                    category: "Type",
                    internal_name: "CSGO_Type_Spray",
                    localized_category_name: "Type",
                    localized_tag_name: "Graffiti",
                  },
                  {
                    category: "Quality",
                    internal_name: "normal",
                    localized_category_name: "Category",
                    localized_tag_name: "Normal",
                  },
                  {
                    category: "Rarity",
                    internal_name: "Rarity_Common",
                    localized_category_name: "Quality",
                    localized_tag_name: "Base Grade",
                    color: "b0c3d9",
                  },
                  {
                    category: "SprayColorCategory",
                    internal_name: "Tint2",
                    localized_category_name: "Graffiti Color",
                    localized_tag_name: "Blood Red",
                  },
                ],
                sealed: 0,
                market_bucket_group_name: "Sealed Graffiti | Mr. Teeth",
                market_bucket_group_id: "G18C40A30046205080010AB0D",
                sealed_type: 0,
                market_name_inside_group: "Blood Red",
                market_bucket_id: "18C40A30046207080010AB0D3002",
              },
              {
                appid: 730,
                classid: "7993036205",
                instanceid: "302028390",
                currency: 0,
                background_color: "393b3e",
                icon_url:
                  "i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2n5rp8SNJ0OGha6xSIvycHGWvw_lJt-BlRiWyhyIqtjmMj4K3dHmXbgMnWJN3QOIIuka6kYfhY7vnsgfd3o5AyS37jX4b7CltsuxXBL1lpPOhUlu5UA",
                descriptions: [
                  {
                    type: "html",
                    value: "Exterior: Field-Tested",
                    name: "exterior_wear",
                  },
                  {
                    type: "html",
                    value: " ",
                    name: "blank",
                  },
                  {
                    type: "html",
                    value:
                      'A less expensive option among the terrorist-exclusive assault rifles, the Galil AR is a serviceable weapon in medium to long-range combat. A grayscale graphic pattern has been applied.\n\n<i>"Do you know how much color cartridges cost?!"</i>',
                    name: "description",
                  },
                  {
                    type: "html",
                    value: " ",
                    name: "blank",
                  },
                  {
                    type: "html",
                    value: "The Ascent Collection",
                    color: "9da1a9",
                    name: "itemset_name",
                  },
                  {
                    type: "html",
                    value: " ",
                    name: "blank",
                  },
                ],
                tradable: 1,
                actions: [
                  {
                    link: "steam://run/730//+csgo_econ_action_preview%20%propid:6%",
                    name: "Inspect in Game...",
                  },
                ],
                name: "Galil AR | Grey Smoke",
                name_color: "b0c3d9",
                type: "Consumer Grade Rifle",
                market_name: "Galil AR | Grey Smoke (Field-Tested)",
                market_hash_name: "Galil AR | Grey Smoke (Field-Tested)",
                market_actions: [
                  {
                    link: "steam://run/730//+csgo_econ_action_preview%20%propid:6%",
                    name: "Inspect in Game...",
                  },
                ],
                commodity: 0,
                market_tradable_restriction: 7,
                market_marketable_restriction: 7,
                marketable: 1,
                tags: [
                  {
                    category: "Type",
                    internal_name: "CSGO_Type_Rifle",
                    localized_category_name: "Type",
                    localized_tag_name: "Rifle",
                  },
                  {
                    category: "Weapon",
                    internal_name: "weapon_galilar",
                    localized_category_name: "Weapon",
                    localized_tag_name: "Galil AR",
                  },
                  {
                    category: "ItemSet",
                    internal_name: "set_timed_drops_cool",
                    localized_category_name: "Collection",
                    localized_tag_name: "The Ascent Collection",
                  },
                  {
                    category: "Quality",
                    internal_name: "normal",
                    localized_category_name: "Category",
                    localized_tag_name: "Normal",
                  },
                  {
                    category: "Rarity",
                    internal_name: "Rarity_Common_Weapon",
                    localized_category_name: "Quality",
                    localized_tag_name: "Consumer Grade",
                    color: "b0c3d9",
                  },
                  {
                    category: "Exterior",
                    internal_name: "WearCategory2",
                    localized_category_name: "Exterior",
                    localized_tag_name: "Field-Tested",
                  },
                ],
                sealed: 0,
                market_bucket_group_name: "Galil AR | Grey Smoke",
                market_bucket_group_id: "G180D20FB093004",
                sealed_type: 0,
                market_name_inside_group: "Field-Tested",
                market_bucket_id: "180D20FB09300438A4E1F5F503",
              },
              {
                appid: 730,
                classid: "3117298605",
                instanceid: "0",
                currency: 0,
                background_color: "402d2d",
                icon_url:
                  "i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJai2l-lQ8ndwMWvJjTGtU9w9ZX35VDpD06pzJCypXJY6_SsP_M-c6PKWTCSle1w57FsHyiykER14WzRmIupdSmJLlh35U0JzaI",
                descriptions: [
                  {
                    type: "html",
                    value:
                      "Has been a member of the Counter-Strike community for over 10 years.",
                    name: "description",
                  },
                  {
                    type: "html",
                    value: " ",
                    name: "blank",
                  },
                ],
                tradable: 0,
                actions: [
                  {
                    link: "steam://run/730//+csgo_econ_action_preview%20%propid:6%",
                    name: "Inspect in Game...",
                  },
                ],
                name: "10 Year Veteran Coin",
                name_color: "eb4b4b",
                type: "Extraordinary Collectible",
                market_name: "10 Year Veteran Coin",
                market_hash_name: "10 Year Veteran Coin",
                market_actions: [
                  {
                    link: "steam://run/730//+csgo_econ_action_preview%20%propid:6%",
                    name: "Inspect in Game...",
                  },
                ],
                commodity: 0,
                market_tradable_restriction: 7,
                market_marketable_restriction: 7,
                marketable: 0,
                tags: [
                  {
                    category: "Type",
                    internal_name: "CSGO_Type_Collectible",
                    localized_category_name: "Type",
                    localized_tag_name: "Collectible",
                  },
                  {
                    category: "Quality",
                    internal_name: "normal",
                    localized_category_name: "Category",
                    localized_tag_name: "Normal",
                  },
                  {
                    category: "Rarity",
                    internal_name: "Rarity_Ancient",
                    localized_category_name: "Quality",
                    localized_tag_name: "Extraordinary",
                    color: "eb4b4b",
                  },
                ],
                sealed: 0,
                market_bucket_group_name: "10 Year Veteran Coin",
                market_bucket_group_id: "G18C9073004",
                sealed_type: 0,
                market_name_inside_group: "Normal",
                market_bucket_id: "18C9073004",
              },
              {
                appid: 730,
                classid: "7993038238",
                instanceid: "302028390",
                currency: 0,
                background_color: "2d3042",
                icon_url:
                  "i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf9Tte0PGheqVhH_yaCW-Ej7wu6bhsHy3rlEQi4DvUy9_6JXjGa1JxCpUmQ7MPsxLukoLmYrvr4lPAy9USG-O6-8A",
                descriptions: [
                  {
                    type: "html",
                    value: "Exterior: Minimal Wear",
                    name: "exterior_wear",
                  },
                  {
                    type: "html",
                    value: " ",
                    name: "blank",
                  },
                  {
                    type: "html",
                    value:
                      "Easily recognizable for its unique bullpup design, the P90 is a great weapon to shoot on the move due to its high-capacity magazine and low recoil. A green and blue coral pattern has been applied.\n\n<i>Nature laughed, for it created something we couldn't dream possible</i>",
                    name: "description",
                  },
                  {
                    type: "html",
                    value: " ",
                    name: "blank",
                  },
                  {
                    type: "html",
                    value: "The Ascent Collection",
                    color: "9da1a9",
                    name: "itemset_name",
                  },
                  {
                    type: "html",
                    value: " ",
                    name: "blank",
                  },
                ],
                tradable: 1,
                actions: [
                  {
                    link: "steam://run/730//+csgo_econ_action_preview%20%propid:6%",
                    name: "Inspect in Game...",
                  },
                ],
                name: "P90 | Reef Grief",
                name_color: "4b69ff",
                type: "Mil-Spec Grade SMG",
                market_name: "P90 | Reef Grief (Minimal Wear)",
                market_hash_name: "P90 | Reef Grief (Minimal Wear)",
                market_actions: [
                  {
                    link: "steam://run/730//+csgo_econ_action_preview%20%propid:6%",
                    name: "Inspect in Game...",
                  },
                ],
                commodity: 0,
                market_tradable_restriction: 7,
                market_marketable_restriction: 7,
                marketable: 1,
                tags: [
                  {
                    category: "Type",
                    internal_name: "CSGO_Type_SMG",
                    localized_category_name: "Type",
                    localized_tag_name: "SMG",
                  },
                  {
                    category: "Weapon",
                    internal_name: "weapon_p90",
                    localized_category_name: "Weapon",
                    localized_tag_name: "P90",
                  },
                  {
                    category: "ItemSet",
                    internal_name: "set_timed_drops_cool",
                    localized_category_name: "Collection",
                    localized_tag_name: "The Ascent Collection",
                  },
                  {
                    category: "Quality",
                    internal_name: "normal",
                    localized_category_name: "Category",
                    localized_tag_name: "Normal",
                  },
                  {
                    category: "Rarity",
                    internal_name: "Rarity_Rare_Weapon",
                    localized_category_name: "Quality",
                    localized_tag_name: "Mil-Spec Grade",
                    color: "4b69ff",
                  },
                  {
                    category: "Exterior",
                    internal_name: "WearCategory1",
                    localized_category_name: "Exterior",
                    localized_tag_name: "Minimal Wear",
                  },
                ],
                sealed: 0,
                market_bucket_group_name: "P90 | Reef Grief",
                market_bucket_group_id: "G181320E8093004",
                sealed_type: 0,
                market_name_inside_group: "Minimal Wear",
                market_bucket_id: "181320E809300438A9B8BDF003",
              },
              {
                appid: 730,
                classid: "7488632023",
                instanceid: "302028390",
                currency: 0,
                background_color: "393b3e",
                icon_url:
                  "i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frnRk7P6he6FpbqWXCzSVkL4h6bExTHuwx0wk6mjUmdn_Iy2TbAUkCZslQu8CtBTrkNz5d7S1oNprwEg",
                descriptions: [
                  {
                    type: "html",
                    value: " ",
                    name: "blank",
                  },
                  {
                    type: "html",
                    value: "Container Series #273",
                    color: "99ccff",
                    name: "attr: set supply crate series",
                  },
                  {
                    type: "html",
                    value: " ",
                    name: "blank",
                  },
                  {
                    type: "html",
                    value:
                      "One item may be purchased from this Terminal. This Terminal will present multiple offers for the following items:",
                    name: "attribute",
                  },
                  {
                    type: "html",
                    value: "SCAR-20 | Caged",
                    color: "4b69ff",
                    name: "attribute",
                  },
                  {
                    type: "html",
                    value: "AUG | Trigger Discipline",
                    color: "4b69ff",
                    name: "attribute",
                  },
                  {
                    type: "html",
                    value: "P2000 | Red Wing",
                    color: "4b69ff",
                    name: "attribute",
                  },
                  {
                    type: "html",
                    value: "MP9 | Broken Record",
                    color: "4b69ff",
                    name: "attribute",
                  },
                  {
                    type: "html",
                    value: "P250 | Bullfrog",
                    color: "4b69ff",
                    name: "attribute",
                  },
                  {
                    type: "html",
                    value: "MAG-7 | MAGnitude",
                    color: "4b69ff",
                    name: "attribute",
                  },
                  {
                    type: "html",
                    value: "MP5-SD | Focus",
                    color: "4b69ff",
                    name: "attribute",
                  },
                  {
                    type: "html",
                    value: "Nova | Ocular",
                    color: "8847ff",
                    name: "attribute",
                  },
                  {
                    type: "html",
                    value: "M4A1-S | Liquidation",
                    color: "8847ff",
                    name: "attribute",
                  },
                  {
                    type: "html",
                    value: "Dual Berettas | Angel Eyes",
                    color: "8847ff",
                    name: "attribute",
                  },
                  {
                    type: "html",
                    value: "MAC-10 | Cat Fight",
                    color: "8847ff",
                    name: "attribute",
                  },
                  {
                    type: "html",
                    value: "UMP-45 | Continuum",
                    color: "8847ff",
                    name: "attribute",
                  },
                  {
                    type: "html",
                    value: "AWP | Ice Coaled",
                    color: "d32ce6",
                    name: "attribute",
                  },
                  {
                    type: "html",
                    value: "MP7 | Smoking Kills",
                    color: "d32ce6",
                    name: "attribute",
                  },
                  {
                    type: "html",
                    value: "Glock-18 | Mirror Mosaic",
                    color: "d32ce6",
                    name: "attribute",
                  },
                  {
                    type: "html",
                    value: "M4A4 | Full Throttle",
                    color: "eb4b4b",
                    name: "attribute",
                  },
                  {
                    type: "html",
                    value: "AK-47 | The Oligarch",
                    color: "eb4b4b",
                    name: "attribute",
                  },
                ],
                tradable: 1,
                name: "Sealed Genesis Terminal",
                name_color: "b0c3d9",
                type: "Base Grade Container",
                market_name: "Sealed Genesis Terminal",
                market_hash_name: "Sealed Genesis Terminal",
                commodity: 1,
                market_tradable_restriction: 7,
                market_marketable_restriction: 7,
                marketable: 1,
                tags: [
                  {
                    category: "Type",
                    internal_name: "CSGO_Type_WeaponCase",
                    localized_category_name: "Type",
                    localized_tag_name: "Container",
                  },
                  {
                    category: "ItemSet",
                    internal_name: "set_community_36",
                    localized_category_name: "Collection",
                    localized_tag_name: "The Genesis Collection",
                  },
                  {
                    category: "Quality",
                    internal_name: "normal",
                    localized_category_name: "Category",
                    localized_tag_name: "Normal",
                  },
                  {
                    category: "Rarity",
                    internal_name: "Rarity_Common",
                    localized_category_name: "Quality",
                    localized_tag_name: "Base Grade",
                    color: "b0c3d9",
                  },
                ],
                sealed: 0,
                container_properties: {
                  contained_items: [
                    {
                      classid: "8588197130",
                      instanceid: "188530139",
                    },
                    {
                      classid: "8588197131",
                      instanceid: "188530139",
                    },
                    {
                      classid: "8588197133",
                      instanceid: "188530139",
                    },
                    {
                      classid: "8494348476",
                      instanceid: "188530139",
                    },
                    {
                      classid: "8588197139",
                      instanceid: "188530139",
                    },
                    {
                      classid: "8588197142",
                      instanceid: "188530139",
                    },
                    {
                      classid: "8588197147",
                      instanceid: "188530139",
                    },
                    {
                      classid: "8588197148",
                      instanceid: "188530139",
                    },
                    {
                      classid: "8588197151",
                      instanceid: "188530139",
                    },
                    {
                      classid: "8588197153",
                      instanceid: "188530139",
                    },
                    {
                      classid: "8588197155",
                      instanceid: "188530139",
                    },
                    {
                      classid: "8588197157",
                      instanceid: "188530139",
                    },
                    {
                      classid: "8588197158",
                      instanceid: "188530139",
                    },
                    {
                      classid: "8588197161",
                      instanceid: "188530139",
                    },
                    {
                      classid: "8588197164",
                      instanceid: "188530139",
                    },
                    {
                      classid: "8588197165",
                      instanceid: "188530139",
                    },
                    {
                      classid: "8588197168",
                      instanceid: "188530139",
                    },
                  ],
                },
                market_bucket_group_name: "Sealed Genesis Terminal",
                market_bucket_group_id: "G18B8283004",
                sealed_type: 0,
                market_name_inside_group: "Normal",
                market_bucket_id: "18B8283004",
              },
              {
                appid: 730,
                classid: "7993038111",
                instanceid: "188530139",
                currency: 0,
                background_color: "402d2d",
                icon_url:
                  "i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5T441rsfhr9kYDl7h1I4_utY5t9LPGaCliA1PxmvORWQiy3nAgq_W-GyNeodinEPQUjA8NyTedfuhS6mtyxZbuw4AHbjtlCm3-tjXgdu3l1o7FVEM6nJkI",
                descriptions: [
                  {
                    type: "html",
                    value: "Exterior: Field-Tested",
                    name: "exterior_wear",
                  },
                  {
                    type: "html",
                    value: " ",
                    name: "blank",
                  },
                  {
                    type: "html",
                    value:
                      "These driving gloves offer protection from the elements while still maintaining tactile sensation. This pair of flannel and leather gloves has an imperial hue.",
                    name: "description",
                  },
                  {
                    type: "html",
                    value: " ",
                    name: "blank",
                  },
                ],
                tradable: 1,
                actions: [
                  {
                    link: "steam://run/730//+csgo_econ_action_preview%20%propid:6%",
                    name: "Inspect in Game...",
                  },
                ],
                name: "★ Driver Gloves | Imperial Plaid",
                name_color: "eb4b4b",
                type: "★ Extraordinary Gloves",
                market_name: "★ Driver Gloves | Imperial Plaid (Field-Tested)",
                market_hash_name:
                  "★ Driver Gloves | Imperial Plaid (Field-Tested)",
                market_actions: [
                  {
                    link: "steam://run/730//+csgo_econ_action_preview%20%propid:6%",
                    name: "Inspect in Game...",
                  },
                ],
                commodity: 0,
                market_tradable_restriction: 7,
                market_marketable_restriction: 7,
                marketable: 1,
                tags: [
                  {
                    category: "Type",
                    internal_name: "Type_Hands",
                    localized_category_name: "Type",
                    localized_tag_name: "Gloves",
                  },
                  {
                    category: "Quality",
                    internal_name: "unusual",
                    localized_category_name: "Category",
                    localized_tag_name: "★",
                    color: "8650AC",
                  },
                  {
                    category: "Rarity",
                    internal_name: "Rarity_Ancient",
                    localized_category_name: "Quality",
                    localized_tag_name: "Extraordinary",
                    color: "eb4b4b",
                  },
                  {
                    category: "Exterior",
                    internal_name: "WearCategory2",
                    localized_category_name: "Exterior",
                    localized_tag_name: "Field-Tested",
                  },
                ],
                sealed: 0,
                market_bucket_group_name: "★ Driver Gloves | Imperial Plaid",
                market_bucket_group_id: "G18A72720BA4E3003",
                sealed_type: 0,
                market_name_inside_group: "Field-Tested",
                market_bucket_id: "18A72720BA4E300338A4E1F5F503",
              },
            ],
          };

          if (!cancelled) setItems(inventory.descriptions);
        } catch {
          if (!cancelled) {
            setInventoryError(
              "Инвентарь недоступен. Возможно, он скрыт настройками Steam.",
            );
          }
        }
      } catch (error) {
        if (!cancelled) {
          console.error(error);
          setInventoryError(
            "Не удалось подключиться к серверу. Попробуй обновить страницу.",
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void loadProfile();

    return () => {
      cancelled = true;
    };
  }, [navigate]);

  if (loading) {
    return <main>Загрузка профиля...</main>;
  }

  if (!profile) {
    return <main>Не удалось загрузить профиль.</main>;
  }

  return (
    <main className="profile">
      <div className="mb-5 mt-10 flex items-end justify-between gap-4">
        <div>
          <div className="text-2xl font-medium uppercase tracking-[0.18em] text-sky-300/80">
            {profile.username ?? "Тут должен быть никнейм"}
            {profile.avatar && (
              <img src={profile.avatar} alt="" width={96} height={96} />
            )}
          </div>
          <p className="text-xs sm:text-xs text-slate-500">{profile.steamId}</p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight sm:text-xl">
            Инвентарь
          </h2>
        </div>
        <span className="hidden text-xs text-slate-500 sm:block">
          Your workspace at a glance
        </span>
      </div>

      <section className="inventory">
        {inventoryError ? (
          <p role="alert">{inventoryError}</p>
        ) : items.length === 0 ? (
          <p>Инвентарь пуст.</p>
        ) : (
          <InventoryGrid items={items}></InventoryGrid>
        )}
      </section>
    </main>
  );
}
