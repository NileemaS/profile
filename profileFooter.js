
class myFooter extends HTMLElement {
    constructor() {
      super();
    }
 

  connectedCallback() {
    this.innerHTML = `
    
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script> 
       
      
    <!-- Footer -->
    <footer class="page-footer font-small unique-color pt-4" style="background-color: lightskyblue;">
  
      <!-- Footer Links -->
      <div class="container-fluid text-center text-md-left">
  
        <!-- Grid row -->
        <div class="row">
  
          <!-- Grid column -->
          <div class="col-md-6 mt-md-0 mt-3">
  
            <!-- Content -->
            <h5 class="text-uppercase">FutureBounce</h5>
            Thank You!!
            <!-- <span  style="width:50px; height:50px;"><img src="qrcodeicon.png" alt="QR Code"></span> -->
  
          </div>
          <!-- Grid column -->
  
          <hr class="clearfix w-100 d-md-none pb-3">
  
          <!-- Grid column -->
          <div class="col-md-3 mb-md-0 mb-3">
  
            <!-- Links -->
            <h5 class="text-uppercase">Projects</h5>
  
            <ul class="list-unstyled">
              <li>
                <a href="../pacmen/index.html">PacMen Exercise </a>
              </li>
              <li>
                <a href="../eye/index.html"> Eye Exercise </a>
              </li>
              <li>
                <a href="../bustracker/index.html"> Bus Tracking Exercise </a>
              </li>
              
            </ul>
  
          </div>
          <!-- Grid column -->
  
          <!-- Grid column -->
          <div class="col-md-3 mb-md-0 mb-3">
           
  
          </div>
          <!-- Grid column -->
  
        
      
      <div id="badges">
        <!-- <a href="https://www.linkedin.com/in/nileema-shah-012501230/recent-activity/shares/"> -->
        <a href="https://www.linkedin.com/in/nileema-shah-012501230/">
          <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&
                    logoColor=white" alt="LinkedIn Badge" />
        </a>
        <a href="https://www.youtube.com/embed/FcCPNxV9uLo">
          <img src="https://img.shields.io/badge/YouTube-red?style=for-the-badge&logo=youtube&
                    logoColor=white" alt="Youtube Badge"/>
        </a>        
      </div>
        </div>
        <!-- Grid row -->
  
      </div>
      <!-- Footer Links -->
  
      <!-- Copyright -->
      <div class="footer-copyright text-center py-3">Copyright © 2022, All Rights are Reserved.
      </div>
      <!-- Copyright -->
  
    </footer>
    <!-- Footer -->
  
  
    `;
}
}

  customElements.define('footer-comp', myFooter);
