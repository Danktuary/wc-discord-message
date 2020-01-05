# discord-mention



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                                                                                                   | Type      | Default     |
| ----------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `color`     | `color`     | The color to use for this mention. Only works for role mentions and must be in hex format.                                                    | `string`  | `undefined` |
| `highlight` | `highlight` | Whether this entire message block should be highlighted (to emulate the "logged in user" being pinged).                                       | `boolean` | `false`     |
| `name`      | `name`      | The name of the user, channel, or role to mention. If omitted, it will be set based upon the `type` prop (i.e. 'User', 'channel', or 'Role'). | `string`  | `undefined` |
| `type`      | `type`      | The type of mention this should be. This will prepend the proper prefix character. Valid values: `user`, `channel`, `role`                    | `string`  | `'user'`    |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
