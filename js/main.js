
function getQoutes ( )
{
  var qoutes = [
    {
      
      Qoute: "Do not take life too seriously. You will not get out alive.",
      Auther: "--Elbert Hubbard"
    },

    {
      Qoute: "'The best revenge is massive success.'",
      Auther: "--Frank Sinatra"
    },

    {
      Qoute: "'You miss 100% of the shots you don't take.'",
      Auther: "--Wayne Gretzy"
    },
  ];

  console.log( qoutes );
  console.log( "num " + qoutes.length );
  
  var numRandom = Math.floor( Math.random() * qoutes.length )
  console.log( numRandom );
  console.log( qoutes[ numRandom ] );
  
  document.getElementById( "quote" ).innerHTML = qoutes[ numRandom ].Qoute;
  document.getElementById( "auther" ).innerHTML = qoutes[numRandom].Auther;
}
console.log( getQoutes( ) );
