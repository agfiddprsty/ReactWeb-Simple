// import React, { Component } from 'react';
// import '../lib/jssor.slider-27.5.0.min.js';
// import './css/slider.css';
// import spin from'./img/spin.svg'


// class Slider extends Component {
//     componentDidMount() {
//       (function (containerId) {

//         var jssor_1_options = {
//             $AutoPlay: 2,
//             $Idle: 0,
//             $SlideDuration: 500000,
//             $SlideEasing: $Jease$.$Linear,
//             $Loop: 0,
//             $PauseOnHover: 4,
//             $SlideWidth: 170,
//             $SlideSpacing: 50,
//             $Align: 0
//           };
  
//           var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
  
//           /*#region responsive code begin*/
  
//           var MAX_WIDTH = 1080;
  
//           function ScaleSlider() {
//               var containerElement = jssor_1_slider.$Elmt.parentNode;
//               var containerWidth = containerElement.clientWidth;
  
//               if (containerWidth) {
  
//                   var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
  
//                   jssor_1_slider.$ScaleWidth(expectedWidth);
//               }
//               else {
//                   window.setTimeout(ScaleSlider, 30);
//               }
//           }
  
//           ScaleSlider();
  
//           $Jssor$.$AddEvent(window, "load", ScaleSlider);
//           $Jssor$.$AddEvent(window, "resize", ScaleSlider);
//           $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
//           /*#endregion responsive code end*/

//       })('jssor_1');
//     }
//     render(){
//         return(
//             <div id="jssor_1" className="one">
//     {/* <!-- Loading Screen --> */}
//                 <div data-u="loading" class="jssorl-009-spin load">
//                     <img className="gambr" alt="" src={spin} />
//                 </div>
//                 <div data-u="slides" className="tu">
//                     <div>
//                         <img data-u="image" alt="" src="https://www.arkademy.com/asset/v3/img/hiring/ketitik.png" />
//                     </div>
//                     <div>
//                         <img data-u="image" alt="" src="https://www.arkademy.com/asset/v3/img/hiring/sirclo.png" />
//                     </div>
//                     <div>
//                         <img data-u="image" alt="" src="https://www.arkademy.com/asset/v3/img/hiring/clap.png" />
//                     </div>
//                     <div>
//                         <img data-u="image" alt="" src="https://www.arkademy.com/asset/v3/img/hiring/kofera.png" />
//                     </div>
//                     <div>
//                         <img data-u="image" alt="" src="https://www.arkademy.com/asset/v3/img/hiring/prosehat.png" />
//                     </div>
//                     <div>
//                         <img data-u="image" alt="" src="https://www.arkademy.com/asset/v3/img/hiring/telkom-indonesia.png" />
//                     </div>
//                     <div>
//                         <img data-u="image" alt="" src="https://www.arkademy.com/asset/v3/img/hiring/tokopedia.png" />
//                     </div>
//                     <div>
//                         <img data-u="image" alt="" src="https://www.arkademy.com/asset/v3/img/hiring/schema.png" />
//                     </div>
//                     <div>
//                         <img data-u="image" alt="" src="https://www.arkademy.com/asset/v3/img/hiring/emago.png" />
//                     </div>
//                     <div>
//                         <img data-u="image" alt="" src="https://www.arkademy.com/asset/v3/img/hiring/jeager.png" />
//                     </div>
//                     <div>
//                         <img data-u="image" alt="" src="https://www.arkademy.com/asset/v3/img/hiring/rekeningku.png" />
//                     </div>
//                     <div>
//                         <img data-u="image" alt="" src="https://www.arkademy.com/asset/v3/img/hiring/bagidata.png" />
//                     </div>
//                     <div>
//                         <img data-u="image" alt="" src="https://www.arkademy.com/asset/v3/img/hiring/telecreative.png" />
//                     </div>
//                     <div>
//                         <img data-u="image" alt="" src="https://www.arkademy.com/asset/v3/img/hiring/true-money.png" />
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Slider;