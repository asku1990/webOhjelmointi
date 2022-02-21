import react from "react";

export default function Header() {
    return (
        <div className="headerOuter">
            <div className="hesari">Helsingin sanomat</div>
            <div className="headerInner">
                <div className="menuElement">Etusivu</div>
                <div className="menuElement">Uutiset</div>
                <div className="menuElement">Lehdet</div>
                <div className="menuElement">Asiakaspalvelu</div>

            </div>
        </div>
    );
    
}