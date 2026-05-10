//Leen

export default function Footer() {
    return (
        <footer className="footer pb-5 pt-5" style={{ backgroundColor: "#f5e5b4", color: "#00000063" }}>
            <div className="container">
                <div className="row text-center align-items-center">
                    <div className="col-12 col-md-3">Copyright<i className="bi bi-c-circle m-1"></i>2026</div>
                    <div className="col-12 col-md-3">All rights reserved. Worldwide.</div>
                    <div className="col-12 col-md-4"> Contact us | +07824562 | Legal disclaimer </div>
                    <div className="col-12 col-md-2">
                        <img src={require("./footerimg.png")} alt="tooth" className="img-fluid mt-3" style={{ maxWidth: "80px", height: "auto" }} />
                    </div>
                </div>
            </div>
        </footer>
    );
}