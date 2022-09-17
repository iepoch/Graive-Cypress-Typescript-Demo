export const getChatsSchema ={
    "type": "object",
    "default": {},
    "required": [
        "error",
        "limit",
        "offset",
        "number_of_page_results",
        "number_of_total_results",
        "status_code",
        "results",
        "version"
    ],
    "properties": {
        "error": {
            "type": ["null", "string"],
            "default": ""
        },
        "limit": {
            "type": "integer",
            "default": 0
        },
        "offset": {
            "type": "integer",
            "default": 0
        },
        "number_of_page_results": {
            "type": "integer",
            "title": "The number_of_page_results Schema"
        },
        "number_of_total_results": {
            "type": "integer",
            "default": 0
        },
        "status_code": {
            "type": "integer",
            "default": 0
        },
        "results": {
            "type": "array",
            "items": {
                "type": "object",
                "required": [
                    "aliases",
                    "api_detail_url",
                    "birthday",
                    "date_added",
                    "date_last_updated",
                    "deck",
                    "description",
                    "first_appeared_in_game",
                    "gender",
                    "guid",
                    "id",
                    "image",
                    "image_tags",
                    "last_name",
                    "name",
                    "real_name",
                    "site_detail_url"
                ],
                "properties": {
                    "aliases": {
                        "type": ["null", "string"],
                        "default": "",
                        "title": "The aliases Schema",
                        "examples": [
                            "Hanzo Hasashi"
                        ]
                    },
                    "api_detail_url": {
                        "type": ["null", "string"],
                        "default": "",
                        "title": "The api_detail_url Schema",
                        "examples": [
                            "https://www.giantbomb.com/api/character/3005-1/"
                        ]
                    },
                    "birthday": {
                        "type": ["null", "string"],
                        "default": null,
                        "title": "The birthday Schema",
                        "examples": [
                            null
                        ]
                    },
                    "date_added": {
                        "type": "string",
                        "default": "",
                        "title": "The date_added Schema",
                        "examples": [
                            "2008-04-30 10:51:40"
                        ]
                    },
                    "date_last_updated": {
                        "type": "string",
                        "default": "",
                        "title": "The date_last_updated Schema",
                        "examples": [
                            "2021-12-24 15:03:00"
                        ]
                    },
                    "deck": {
                        "type": ["null", "string"],
                        "default": "",
                        "title": "The deck Schema",
                        "examples": [
                            "Scorpion is a wraith from the Netherrealm who is consumed with a desire for revenge."
                        ]
                    },
                    "description": {
                        "type": ["null", "string"],
                        "default": "",
                    },
                    "first_appeared_in_game": {
                        "type": "object",
                        "default": {},
                        "title": "The first_appeared_in_game Schema",
                        "required": [
                            "api_detail_url",
                            "id",
                            "name"
                        ],
                        "properties": {
                            "api_detail_url": {
                                "type": ["null", "string"],
                                "default": "",
                                "title": "The api_detail_url Schema",
                                "examples": [
                                    "https://www.giantbomb.com/api/game/3030-15743/"
                                ]
                            },
                            "id": {
                                "type": "integer",
                                "default": 0,
                                "title": "The id Schema",
                                "examples": [
                                    15743
                                ]
                            },
                            "name": {
                                "type": ["null", "string"],
                                "default": "",
                                "title": "The name Schema",
                                "examples": [
                                    "Mortal Kombat"
                                ]
                            }
                        },
                    },
                    "gender": {
                        "type": "integer",
                        "default": 0,
                        "title": "The gender Schema",
                        "examples": [
                            1
                        ]
                    },
                    "guid": {
                        "type": "string",
                        "default": "",
                        "title": "The guid Schema",
                        "examples": [
                            "3005-1"
                        ]
                    },
                    "id": {
                        "type": "integer",
                        "default": 0,
                        "title": "The id Schema",
                        "examples": [
                            1
                        ]
                    },
                    "image": {
                        "type": "object",
                        "default": {},
                        "title": "The image Schema",
                        "required": [
                            "icon_url",
                            "medium_url",
                            "screen_url",
                            "screen_large_url",
                            "small_url",
                            "super_url",
                            "thumb_url",
                            "tiny_url",
                            "original_url",
                            "image_tags"
                        ],
                        "properties": {
                            "icon_url": {
                                "type": "string",
                                "default": "",
                                "title": "The icon_url Schema",
                                "examples": [
                                    "https://www.giantbomb.com/a/uploads/square_avatar/0/1992/3075080-screen%20shot%202019-01-13%20at%2012.27.06%20pm.png"
                                ]
                            },
                            "medium_url": {
                                "type": "string",
                                "default": "",
                                "title": "The medium_url Schema",
                                "examples": [
                                    "https://www.giantbomb.com/a/uploads/scale_medium/0/1992/3075080-screen%20shot%202019-01-13%20at%2012.27.06%20pm.png"
                                ]
                            },
                            "screen_url": {
                                "type": "string",
                                "default": "",
                                "title": "The screen_url Schema",
                                "examples": [
                                    "https://www.giantbomb.com/a/uploads/screen_medium/0/1992/3075080-screen%20shot%202019-01-13%20at%2012.27.06%20pm.png"
                                ]
                            },
                            "screen_large_url": {
                                "type": "string",
                                "default": "",
                                "title": "The screen_large_url Schema",
                                "examples": [
                                    "https://www.giantbomb.com/a/uploads/screen_kubrick/0/1992/3075080-screen%20shot%202019-01-13%20at%2012.27.06%20pm.png"
                                ]
                            },
                            "small_url": {
                                "type": "string",
                                "default": "",
                                "title": "The small_url Schema",
                                "examples": [
                                    "https://www.giantbomb.com/a/uploads/scale_small/0/1992/3075080-screen%20shot%202019-01-13%20at%2012.27.06%20pm.png"
                                ]
                            },
                            "super_url": {
                                "type": "string",
                                "default": "",
                                "title": "The super_url Schema",
                                "examples": [
                                    "https://www.giantbomb.com/a/uploads/scale_large/0/1992/3075080-screen%20shot%202019-01-13%20at%2012.27.06%20pm.png"
                                ]
                            },
                            "thumb_url": {
                                "type": "string",
                                "default": "",
                                "title": "The thumb_url Schema",
                                "examples": [
                                    "https://www.giantbomb.com/a/uploads/scale_avatar/0/1992/3075080-screen%20shot%202019-01-13%20at%2012.27.06%20pm.png"
                                ]
                            },
                            "tiny_url": {
                                "type": "string",
                                "default": "",
                                "title": "The tiny_url Schema",
                                "examples": [
                                    "https://www.giantbomb.com/a/uploads/square_mini/0/1992/3075080-screen%20shot%202019-01-13%20at%2012.27.06%20pm.png"
                                ]
                            },
                            "original_url": {
                                "type": "string",
                                "default": "",
                                "title": "The original_url Schema",
                                "examples": [
                                    "https://www.giantbomb.com/a/uploads/original/0/1992/3075080-screen%20shot%202019-01-13%20at%2012.27.06%20pm.png"
                                ]
                            },
                            "image_tags": {
                                "type": "string",
                                "default": "",
                                "title": "The image_tags Schema",
                                "examples": [
                                    "All Images,MK11"
                                ]
                            }
                        },
                        "examples": [{
                            "icon_url": "https://www.giantbomb.com/a/uploads/square_avatar/0/1992/3075080-screen%20shot%202019-01-13%20at%2012.27.06%20pm.png",
                            "medium_url": "https://www.giantbomb.com/a/uploads/scale_medium/0/1992/3075080-screen%20shot%202019-01-13%20at%2012.27.06%20pm.png",
                            "screen_url": "https://www.giantbomb.com/a/uploads/screen_medium/0/1992/3075080-screen%20shot%202019-01-13%20at%2012.27.06%20pm.png",
                            "screen_large_url": "https://www.giantbomb.com/a/uploads/screen_kubrick/0/1992/3075080-screen%20shot%202019-01-13%20at%2012.27.06%20pm.png",
                            "small_url": "https://www.giantbomb.com/a/uploads/scale_small/0/1992/3075080-screen%20shot%202019-01-13%20at%2012.27.06%20pm.png",
                            "super_url": "https://www.giantbomb.com/a/uploads/scale_large/0/1992/3075080-screen%20shot%202019-01-13%20at%2012.27.06%20pm.png",
                            "thumb_url": "https://www.giantbomb.com/a/uploads/scale_avatar/0/1992/3075080-screen%20shot%202019-01-13%20at%2012.27.06%20pm.png",
                            "tiny_url": "https://www.giantbomb.com/a/uploads/square_mini/0/1992/3075080-screen%20shot%202019-01-13%20at%2012.27.06%20pm.png",
                            "original_url": "https://www.giantbomb.com/a/uploads/original/0/1992/3075080-screen%20shot%202019-01-13%20at%2012.27.06%20pm.png",
                            "image_tags": "All Images,MK11"
                        }]
                    },
                    "image_tags": {
                        "type": "array",
                        "default": [],
                        "title": "The image_tags Schema",
                        "items": {
                            "type": "object",
                            "title": "A Schema",
                            "required": [
                                "api_detail_url",
                                "name",
                                "total"
                            ],
                            "properties": {
                                "api_detail_url": {
                                    "type": "string",
                                    "title": "The api_detail_url Schema",
                                    "examples": [
                                        "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:All%20Images",
                                        "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:Artwork",
                                        "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:Cosplay",
                                        "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:Fan%20Art",
                                        "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:In-Game%20Image",
                                        "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:Live%20Action",
                                        "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:Merchandise",
                                        "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:MK11",
                                        "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:Mortal%20Kombat%20X",
                                        "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:Render",
                                        "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:Screenshot",
                                        "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:Wallpaper"
                                    ]
                                },
                                "name": {
                                    "type": "string",
                                    "title": "The name Schema",
                                    "examples": [
                                        "All Images",
                                        "Artwork",
                                        "Cosplay",
                                        "Fan Art",
                                        "In-Game Image",
                                        "Live Action",
                                        "Merchandise",
                                        "MK11",
                                        "Mortal Kombat X",
                                        "Render",
                                        "Screenshot",
                                        "Wallpaper"
                                    ]
                                },
                                "total": {
                                    "type": "integer",
                                    "title": "The total Schema",
                                    "examples": [
                                        134,
                                        29,
                                        2,
                                        15,
                                        10,
                                        3,
                                        8,
                                        6,
                                        23,
                                        34,
                                        5
                                    ]
                                }
                            },
                            "examples": [{
                                "api_detail_url": "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:All%20Images",
                                "name": "All Images",
                                "total": 134
                            },
                            {
                                "api_detail_url": "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:Artwork",
                                "name": "Artwork",
                                "total": 29
                            },
                            {
                                "api_detail_url": "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:Cosplay",
                                "name": "Cosplay",
                                "total": 2
                            },
                            {
                                "api_detail_url": "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:Fan%20Art",
                                "name": "Fan Art",
                                "total": 15
                            },
                            {
                                "api_detail_url": "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:In-Game%20Image",
                                "name": "In-Game Image",
                                "total": 10
                            },
                            {
                                "api_detail_url": "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:Live%20Action",
                                "name": "Live Action",
                                "total": 3
                            },
                            {
                                "api_detail_url": "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:Merchandise",
                                "name": "Merchandise",
                                "total": 8
                            },
                            {
                                "api_detail_url": "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:MK11",
                                "name": "MK11",
                                "total": 2
                            },
                            {
                                "api_detail_url": "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:Mortal%20Kombat%20X",
                                "name": "Mortal Kombat X",
                                "total": 6
                            },
                            {
                                "api_detail_url": "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:Render",
                                "name": "Render",
                                "total": 23
                            },
                            {
                                "api_detail_url": "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:Screenshot",
                                "name": "Screenshot",
                                "total": 34
                            },
                            {
                                "api_detail_url": "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:Wallpaper",
                                "name": "Wallpaper",
                                "total": 5
                            }]
                        },
                        "examples": [
                            [{
                                "api_detail_url": "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:All%20Images",
                                "name": "All Images",
                                "total": 134
                            },
                            {
                                "api_detail_url": "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:Artwork",
                                "name": "Artwork",
                                "total": 29
                            },
                            {
                                "api_detail_url": "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:Cosplay",
                                "name": "Cosplay",
                                "total": 2
                            },
                            {
                                "api_detail_url": "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:Fan%20Art",
                                "name": "Fan Art",
                                "total": 15
                            },
                            {
                                "api_detail_url": "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:In-Game%20Image",
                                "name": "In-Game Image",
                                "total": 10
                            },
                            {
                                "api_detail_url": "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:Live%20Action",
                                "name": "Live Action",
                                "total": 3
                            },
                            {
                                "api_detail_url": "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:Merchandise",
                                "name": "Merchandise",
                                "total": 8
                            },
                            {
                                "api_detail_url": "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:MK11",
                                "name": "MK11",
                                "total": 2
                            },
                            {
                                "api_detail_url": "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:Mortal%20Kombat%20X",
                                "name": "Mortal Kombat X",
                                "total": 6
                            },
                            {
                                "api_detail_url": "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:Render",
                                "name": "Render",
                                "total": 23
                            },
                            {
                                "api_detail_url": "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:Screenshot",
                                "name": "Screenshot",
                                "total": 34
                            },
                            {
                                "api_detail_url": "https://www.giantbomb.com/api/images/3005-1/?filter=image_tag:Wallpaper",
                                "name": "Wallpaper",
                                "total": 5
                            }]
                        ]
                    },
                    "last_name": {
                        "type": ["null", "string"],
                        "default": null,
                        "title": "The last_name Schema",
                        "examples": [
                            null
                        ]
                    },
                    "name": {
                        "type": ["null", "string"],
                        "default": "",
                        "title": "The name Schema",
                        "examples": [
                            "Scorpion"
                        ]
                    },
                    "real_name": {
                        "type": ["null", "string"],
                        "default": "",
                        "title": "The real_name Schema",
                        "examples": [
                            "Hanzo Hasashi"
                        ]
                    },
                    "site_detail_url": {
                        "type": ["null", "string"],
                        "default": "",
                        "title": "The site_detail_url Schema",
                        "examples": [
                            "https://www.giantbomb.com/scorpion/3005-1/"
                        ]
                    }
                }
            }
        },
        "version": {
            "type": ["null", "string"],
            "default": ""
        }
    }
}