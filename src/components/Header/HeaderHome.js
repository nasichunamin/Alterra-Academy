import './HeaderHome.css'
import LogoAtas from '../../assets/images/logo-ALTA@2x.png'

const HeaderHome = () =>{
    return(
        <div>
            <header>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                            <div className="alterra">
                                <a href="index.html">
                                    <img className="logo-atas" src={LogoAtas} alt="logo" />    
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                            <div className="container">
                                <div className="row align-items-center navig">
                                    <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right">
                                        <a href="/" className="aktif">HOME</a>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center">
                                        <a href="/about">ABOUT</a>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-left">
                                        <a href="#asa">EXPERIENCE</a>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right">
                                        <a href="form.html">CONTACT</a>
                                    </div> 
                                </div>
                            </div> 
                        </div>    
                    </div>
                </div> 
            </header>
        </div>
    )
}
export default HeaderHome