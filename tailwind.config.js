module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        rotate360:"rotate360 5s  0s linear infinite normal forwards" ,
        fadeforward:"fadeforward 2.5s ease 0s normal forwards",
        swingforward:"swingforward 1s ease-in-out 0s normal forwards",
         },
      keyframes:{
           rotate360 : {
             "0%" : {
           transform: "rotate(0)"
          },

            "100%" : {
            transform: "rotate(360deg)"
           }
          },
            slideinright:{
              "0%" :{
                transform: "translateX(-250px)",
                opacity: 0,
              },
              "100%" :{
                transform: "translateX(0)",
                opacity: 1,
              }
            },
            fadeforward :{
            "0%": {
              opacity: 0,
              transform: "scale(0)"
            },
          
            "100%": {
              opacity: 1,
              transform: "scale(1)"
            }
          },
          swingforward: {
            "0%": {
              transform: "scaleX(0)",
            },
            "100%": {
              transform: "scaleX(1)",
            }
          },
         

      }
    },
    fontFamily:{
      "lobster":['Lobster', "cursive"],
      "kanit":['Kanit', "sans-serif"]
    
    }
  },
  plugins: [],
}