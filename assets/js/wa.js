$('.myButton').on('click', function(event) {
    event.preventDefault(); 
    var no = $("#wa").val();
    if (no==null || no==""){
        alert ("Nomor jangan kosong!!!")
    }
    else 
        {
            
        
    var wa = "https://api.whatsapp.com/send?phone="
    var url = wa + no;
    window.location.replace(url);
        }
});