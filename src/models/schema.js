export const schema = {
    "models": {
        "MTX": {
            "name": "MTX",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "price": {
                    "name": "price",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "filePath": {
                    "name": "filePath",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "MTXES",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "User": {
            "name": "User",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "coins": {
                    "name": "coins",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "meditateD": {
                    "name": "meditateD",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "sleepD": {
                    "name": "sleepD",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "moveD": {
                    "name": "moveD",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "focusD": {
                    "name": "focusD",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "friends": {
                    "name": "friends",
                    "isArray": true,
                    "type": "String",
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "accessoryEquipped": {
                    "name": "accessoryEquipped",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "backgroundEquipped": {
                    "name": "backgroundEquipped",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "hatEquipped": {
                    "name": "hatEquipped",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Users",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {},
    "version": "67813cfafd5c5f354b859580c16a02c5"
};