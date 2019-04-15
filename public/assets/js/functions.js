/*document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelector('.sidenav');
	var instances = M.Sidenav.init(elems);

	var select = document.querySelector('select');
    var selectinst = M.FormSelect.init(select);

});*/

document.addEventListener('DOMContentLoaded', function() {
    /*var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);

    var tabel = document.querySelectorAll('.tabs');
    var tabinstance = M.Tabs.init(tabel);

    var selelems = document.querySelectorAll('select');
    var selinstances = M.FormSelect.init(selelems);

    
    
    var sliderelems = document.querySelectorAll('.carousel');
    var sliderinstances = M.Carousel.init(sliderelems, {fullWidth: true, indicators: true});
*/
    var ddelems = document.querySelectorAll('.dropdown-trigger');
    var ddinstances = M.Dropdown.init(ddelems, {constrainWidth: false, alignment: 'menu-content', outDuration: 50, hover: true});



  });

function sliderload() {
    var sliderelems = document.querySelectorAll('.carousel');
    var sliderinstances = M.Carousel.init(sliderelems, {fullWidth: true, indicators: true});

}