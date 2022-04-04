class myHeader extends HTMLElement {
    constructor() {
      super();
    } 


connectedCallback() {
    this.innerHTML = 
    `
    
<html>
<head>
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
 </link>
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
 <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
 <link rel = "stylesheet" href = "styles.css">
 <script src= "search.js" type="text/javascript"></script>

</head>
<body>

<nav id="guardian" class="navbar navbar-inverse" style="background-color:lightblue;" >
 
 <div class="card card-plain">

    <div class= "card-header"  role="tab" id="heading1">

              
         <span style="font-size:32px; font-weight:bold; font-family: cursive; padding: 5px;margin-top:2px; margin-left:20%; text-align:center;">  Future Bounce Projects</span> 
                 
                     
        <button class="navbar-toggler" type="button" data-toggle="collapse"    
            data-target="#collapse2"" aria-controls="collapse2" aria-expanded="false" 
            aria-label="Toggle navigation">
            <span class="glyphicon glyphicon-menu-hamburger"></span>
            <span class = "seefont" >Menu  </span>     
        </button>
        
        

        <form class="navbar-form navbar-right">  
            <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle dropbtn" type="button" 
                    data-toggle="dropdown" onclick="myFunction()">
                    <span class="glyphicon glyphicon-search"></span> Bootstrap Search
                </button>   

                <div id="myDropdown" class="dropdown-menu dropdown-primary dropdown-content" >     
                    <input class="form-control" type="text" placeholder="Search" aria-label="Search" id="myInput" onkeyup="filterFunction()">
                    <a class="dropdown-item" href="../pacmen/index.html"> PacMen</a>
                    <a class="dropdown-item" href="../eye/index.html"> Eye Exercise</a>
                    <a class="dropdown-item" href="../bustracker/index.html"> Bus Tracker </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="../profile/index.html"> Contact </a>
                    
                </div>
            </div>  
        </form>  
    </div>

    <div id="collapse2" class="collapse" role="tabpanel" aria-labelledby="heading2" 
        data-parent="#accordion">
        <div class="card-body">

         
            <ul class="list-unstyled list-inline" > 
                <li class="list-inline-item">
                    <button type="button" class="btn btn-info" 
                    onclick="window.location.href='../profile/index.html';"> Home </button>
                </li>

                <li class="list-inline-item">
                    <button type="button" class="btn btn-info" 
                    onclick="window.location.href='../pacmen/index.html';">
                    PacMen</button>
                </li>

                <li class="list-inline-item">
                    <button type="button" class="btn btn-info"
                    onclick="window.location.href='../eye/index.html';">
                    Eye </button>
                </li>

                <li class="list-inline-item">
                    <button type="button" class="btn btn-info"
                    onclick="window.location.href='../bustracker/index.html';">Bus Tracker</button>
                </li>
                 
            </ul>
        
        </div> 
    </div>              
</div>  
</nav>      

</body>
</html>

    `;
}
}

  customElements.define('header-comp', myHeader);
