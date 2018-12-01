import React from 'react';
import { SheetPreview, SheetPrintView } from './Sheet';
import PrintMediaQuery from './PrintMediaQuery';

export const LayoutPrintView = ({ ...props }) => <SheetPrintView {...props} className="" style={{}} />;

const Layout = ({ children, className, style, ...props }) => (
    <div className="flex justify-center pa3">
        <div className={className} style={style}>
            {children}
        </div>
        <div className="">
            <div className="fr" style={{ marginLeft: '40px' }}>
                <SheetPreview {...props} />
            </div>
        </div>
    </div>
);

export default PrintMediaQuery(Layout, LayoutPrintView);
