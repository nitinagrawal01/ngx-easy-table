import { Component } from '@angular/core';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css'],
})
export class DocComponent {
  public readonly columnDefinitionCode = `
import { Columns } from 'ngx-easy-table';

public columns: Columns[] = [
    { key: 'phone', title: 'Phone' },
];
`;
  public readonly columnDefinitionCode2 = `
import { Columns } from 'ngx-easy-table';

public columns: Columns[] = [
    { key: 'address.street.number', title: 'Phone' },
];
`;
  public readonly columnPlaceholderCode = `
import { Columns } from 'ngx-easy-table';

public columns: Columns[] = [
    { key: 'phone', title: 'Phone', placeholder: 'Search phone' },
];
`;
  public readonly columnWidthCode = `
import { Columns } from 'ngx-easy-table';

public columns: Columns[] = [
    { key: 'phone', title: 'Phone', width: '10%' },
];
`;
  public readonly columnCellTemplateCode = `
import { Columns } from 'ngx-easy-table';

@ViewChild('actionTpl') actionTpl: TemplateRef<any>;
public columns: Columns[] = [
    { key: 'phone', title: 'Phone', cellTemplate: this.actionTpl },
];
`;
  public readonly columnOrderCode = `
import { Columns } from 'ngx-easy-table';

public columns: Columns[] = [
    { key: 'phone', title: 'Phone', orderEnabled: false },
];
`;
  public readonly columnSearchCode = `
import { Columns } from 'ngx-easy-table';

public columns: Columns[] = [
    { key: 'phone', title: 'Phone', searchEnabled: false },
];
`;
  public readonly columnOrderByCode = `
import { Columns } from 'ngx-easy-table';

public columns: Columns[] = [
    { key: 'phone', title: 'Phone', orderBy: 'phone' },
];
`;
  public readonly tableFontCode = `:host /deep/ #table {
  font-family: 'Montserrat', sans-serif;
}
`;
  public readonly columnOrderEventCode = `
import { Columns } from 'ngx-easy-table';

public columns: Columns[] = [
    { key: 'phone', title: 'Phone', orderEventOnly: true },
];
`;
}
