import React from 'react';
import PrintMediaQuery from './PrintMediaQuery';

export const LayoutPrintView = SheetPrintView => ({ ...props }) => <SheetPrintView {...props} className="" style={{}} />;

const Layout = SheetPreview => ({ children, className, style, ...props }) => (
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

export default (SheetPreview, SheetPrintView) => PrintMediaQuery(Layout(SheetPreview), LayoutPrintView(SheetPrintView));
