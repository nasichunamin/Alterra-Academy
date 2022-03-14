import './ContentHome.css'
import FotoProfil from '../../assets/images/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg'

const ContentHome = () =>{
    return(
        <div class="container">
            <div class="row align-items-center isi-home">
                <div class="col-lg-4 col-md-12 col-sm-12 col-12">
                    <img id="foto-profil" src={FotoProfil}></img>
                </div>
                <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                    <div class="main-p">
                        <p class="sapaan">Hi, my name is </p>
                        <p class="nama">Anne Sullivan</p>
                        <p class="hobi">I build things for the web</p>
                        <p class="tombol"><a href="about.html">Get In Touch</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContentHome