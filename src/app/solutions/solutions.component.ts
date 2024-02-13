import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})

export class SolutionsComponent {
  selectedTab = '01 Data Insights';
  insightsData = ['Unearth hidden gems: Leverage our expert-crafted custom analyses or explore industry/sector reports to gain actionable insights from your data. See it unfold: Interactively explore powerful data sets and tools, visualizing insights in real-time for quicker decision-making.', './assets/images/Analysis-cuate 1.svg'];
  publishingData = ['Fuel smarter decisions: Access an ocean of high-quality data across diverse sectors, readily available through APIs or convenient CSV downloads.', './assets/images/data-publishing.svg'];
  toolingData = ['Unleash the full potential: Integrate seamlessly with your existing data environment, unlocking the power of your combined data ecosystem. Data-driven decisions: Empower your teams with real-time analytics, transforming data into actionable insights on the fly.', './assets/images/data-tooling.svg'];
  cloudData = ['Cloud innovation, simplified: Leverage our advanced cloud services to optimize storage, processing, and analysis, unlocking seamless scalability and agility.', './assets/images/cloud_computing.svg'];

  onTabClick(tabName: string) {
    this.selectedTab = tabName;
  }

  getSelectedData(index: number): string {
    switch (this.selectedTab) {
      case '01 Data Insights':
        return this.insightsData[index];
      case '02 Data Publishing':
        return this.publishingData[index];
      case '03 Data Tooling':
        return this.toolingData[index];
      case '04 Cloud Solutions':
        return this.cloudData[index];
      default:
        return "";
    }
  }

}
