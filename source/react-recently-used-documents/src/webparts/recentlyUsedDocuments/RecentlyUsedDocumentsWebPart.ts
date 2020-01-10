import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration
} from '@microsoft/sp-webpart-base';

import * as strings from 'RecentlyUsedDocumentsWebPartStrings';
import RecentlyUsedDocuments from './components/RecentlyUsedDocuments';
import { IRecentlyUsedDocumentsProps } from './components/IRecentlyUsedDocumentsProps';
import { MSGraphClient } from '@microsoft/sp-http';

export interface IRecentlyUsedDocumentsWebPartProps {
  title: string;
  nrOfItems: number;
}

export default class RecentlyUsedDocumentsWebPart extends BaseClientSideWebPart<IRecentlyUsedDocumentsWebPartProps> {
  private graphClient: MSGraphClient;
  private propertyFieldNumber;

  public onInit(): Promise<void> {
    return new Promise<void>((resolve: () => void, reject: (error: any) => void): void => {
      this.context.msGraphClientFactory
        .getClient()
        .then((client: MSGraphClient): void => {
          this.graphClient = client;
          resolve();
        }, err => reject(err));
    });
  }

  public render(): void {
    const element: React.ReactElement<IRecentlyUsedDocumentsProps> = React.createElement(
      RecentlyUsedDocuments,
      {
        title: this.properties.title,
        nrOfItems: this.properties.nrOfItems,
        context: this.context,
        graphClient: this.graphClient,
        displayMode: this.displayMode,
        updateProperty: (value: string) => {
          this.properties.title = value;
        }
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  //executes only before property pane is loaded.
  protected async loadPropertyPaneResources(): Promise<void> {
    // import additional controls/components

    const { PropertyFieldNumber } = await import(
      /* webpackChunkName: 'pnp-propcontrols-number' */
      '@pnp/spfx-property-controls/lib/propertyFields/number'
    );

    this.propertyFieldNumber = PropertyFieldNumber;
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupFields: [
                this.propertyFieldNumber("nrOfItems", {
                  key: "nrOfItems",
                  label: strings.NrOfDocumentsToShow,
                  value: this.properties.nrOfItems,
                  minValue: 1,
                  maxValue: 10
                })
              ]
            }
          ]
        }
      ]
    };
  }
}