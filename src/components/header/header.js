import React from "react";

class Header extends  React.Component {
    render() {
        return(
            <div className="header ">
                <div className="company-info row">
                    <div className="company-info__logo col-2">Logo</div>
                </div>
                <div className="sub-header">
                    <div className="company-info row">
                        <div className="company-info__name col-2">BlaConpany</div>
                        <div className="company-info__page col-2">Доска</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;