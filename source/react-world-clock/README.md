# World Time web part

This web part provides you the ability to display basic clock for a given time zone on a web page. The clock is based on the user's workstation time with an offset from UTC to the selected time zone.

![World Time](../../assets/images/components/part-world-time.gif)

## How to use this web part on your web pages

1. Place the page you want to add this web part to in edit mode.
2. Search for and insert the **World Time** web part.
3. Configure the web part to update its properties.

## Configurable Properties

The `World Time` web part can be configured with the following properties:

| Label | Property | Type | Required | Description |
| ---- | ---- | ---- | ---- | ---- |
| Description | description | string | no | Default: UTC Time - The clock description |
| Time Zone | timeZoneOffset | number | no | Default: 0 - The clock offset where 0 = UTC, -8 = PST (UTC−08:00), etc |

## Installing the web part

See getting started from [SP-Starter-Kit repository readme](https://github.com/SharePoint/sp-starter-kit). 

You can also download just the [SharePoint Framework solution package (spppkg) file](https://github.com/SharePoint/sp-starter-kit/blob/master/package/sharepoint-starter-kit.sppkg) and install that to your tenant.

## Screenshots

![World Time](../../assets/images/components/part-world-time.png)

## Used SharePoint Framework Version

![drop](https://img.shields.io/badge/version-1.4-green.svg)

* Works also at SharePoint 2019

## Applies to

* [SharePoint Framework](https:/dev.office.com/sharepoint)
* [Office 365 tenant](https://dev.office.com/sharepoint/docs/spfx/set-up-your-development-environment)
* [SharePoint 2019](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/sharepoint-2019-development-platform)

## Prerequisites

none

## Solution

Solution|Author(s)
--------|---------
react-world-clock | Dragan Panjkov (@panjkov)

## Version history

Version|Date|Comments
-------|----|--------
1.0|January 5, 2020|Initial release (extract web part from Starter Kit v1)

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

* Clone this repository
* Move to solution folder
* in the command line run:
  * `npm install`
  * `gulp serve`

> Include any additional steps as needed.

## Features

Description of the web part with possible additional details than in short summary. 
This Web Part illustrates the following concepts on top of the SharePoint Framework:

* PnP property control usage

<img src="https://telemetry.sharepointpnp.com/sp-starter-kit/source/react-world-clock" />
