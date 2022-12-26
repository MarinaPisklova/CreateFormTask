import shippingForm from "../store/formStore";

class APIService {
  getLocation(){
    navigator.geolocation.getCurrentPosition(function () {
      var ip = '';
      var XMLHttp = new XMLHttpRequest();
      XMLHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          var ipwhois = JSON.parse(this.responseText);
          shippingForm.onAddressFieldChange("shipping", "country", ipwhois.country);
          shippingForm.onAddressFieldChange("shipping", "city", ipwhois.city);
          shippingForm.onAddressFieldChange("shipping", "zip", ipwhois.postal);
        }
      };
      XMLHttp.open('GET', 'https://ipwho.is/' + ip, true);
      XMLHttp.send();
    });
  }
}

export default new APIService();