import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})

export class SolutionsComponent {
  selectedTab = '01 Powerful Data & Analytics';
  insightsData = ['Access high-quality African data across diverse sectors, readily available through APIs or convenient CSV downloads. Interact with our powerful data sets and quickly visualize insights to power your decision-making. Custom analyses and sector reports.', './assets/images/Analysis-cuate 1.svg'];
  publishingData = ['Fuel smarter decisions: Access an ocean of high-quality data across diverse sectors, readily available through APIs or convenient CSV downloads.', './assets/images/data-publishingb.svg'];
  toolingData = ['Integrate our technology and tools into your data environment, and unleash the potential of your data. Empower your teams with real-time analytics, transforming your data into actionable insights on the fly.', './assets/images/data_tooling 1.svg'];
  cloudData = ['Cloud innovation, simplified: Leverage our advanced cloud services to optimize storage, processing, and analysis, unlocking seamless scalability and agility.', './assets/images/cloud-computing1 1.svg'];

  onTabClick(tabName: string) {
    this.selectedTab = tabName;
  }

  getSelectedData(index: number): string {
    switch (this.selectedTab) {
      case '01 Powerful Data & Analytics':
        return this.insightsData[index];
      case '02 Data Publishing':
        return this.publishingData[index];
      case '03 Data Tools':
        return this.toolingData[index];
      case '04 Cloud Solutions':
        return this.cloudData[index];
      default:
        return "";
    }
  }

}
