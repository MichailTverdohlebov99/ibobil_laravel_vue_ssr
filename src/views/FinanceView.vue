<template>
  <div class="finance-view">
    <div class="finance-banner banner">
      <div class="parallelogram">
        <div class="container">
          <div class="banner-content hidden-xs hidden-sm" style="margin-left:100px">
            <h1 class="font-33 banner-title">Beregn og søk lån
              <br>til din nye caravan
            </h1>
            <p
              class="sub-heading-finance"
            >Sammen med Santander Bank tilbyr iBobil våre kunder caravanlån, med lang erfaring og et trygt valg.</p>
          </div>
          <div class="banner-content visible-xs visible-sm" style="width: 80%;margin: 0 auto;">
            <h1 class="font-33 banner-title">Beregn og søk lån til din nye caravan</h1>
            <p
              class="sub-heading-finance"
            >Sammen med Santander Bank tilbyr iBobil våre kunder caravanlån, med lang erfaring og et trygt valg.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row" style="padding:50px 0px">
        <div
          class="col-md-4"
          style="display: flex;flex-direction: row;align-items: center;justify-content: space-between;margin-bottom: 20px;"
        >
          <img src="~public/static/financing-icon-3.svg" alt style="width:50px">
          <p
            style="width:80%;margin:0;color:#a6a6a6;"
          >Det tar deg under 1 minutt å fylle ut søknaden</p>
        </div>
        <div
          class="col-md-4"
          style="display: flex;flex-direction: row;align-items: center;justify-content: space-between;margin-bottom: 20px;"
        >
          <img src="~public/static/financing-icon-2.svg" alt style="width:50px">
          <p style="width:80%;margin:0;color:#a6a6a6;">Elektronisk signering av dokumenter</p>
        </div>
        <div
          class="col-md-4"
          style="display: flex;flex-direction: row;align-items: center;justify-content: space-between;margin-bottom: 20px;"
        >
          <img src="~public/static/financing-icon-1.svg" alt style="width:50px">
          <p
            style="width:80%;margin:0;color:#a6a6a6;"
          >Inntil 15 års nedbetalingstid og opp til 100% finansiering</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div
        class="row"
        style="border-radius:50px;background:#f2f5f6;padding:60px 60px;margin-bottom:50px"
      >
        <div class="row">
          <div class="col-md-12 visible-xs visible-sm">
            <img src="~public/static/santander.jpg" alt style="width: 100%;margin-bottom:10px">
          </div>
          <div class="col-md-8">
            <p style="font-size: 1.2em;font-weight: bold;">Caravan lånekalkulator - Søk om lån her</p>
            <p style="font-weight: bold;margin-top: 30px;">1. Velg bobil eller campingvogn</p>
            <div class="row">
              <div class="col-md-4">
                <select name="select1" id class="form-control" v-model="ibobil" @change="setType">
                  <option value="1">Bobil</option>
                  <option value="0">Campingvogn</option>
                </select>
              </div>
            </div>
            <p
              style="font-weight: bold;margin-top: 30px;"
            >2. Søker du lån for en ny eller brukt caravan?</p>
            <form action>
              <label
                for="neworused1"
                style="font-weight: normal;margin-right: 30px;color: #7b7b7b;"
              >
                <input
                  type="radio"
                  name="neworused"
                  value="0"
                  id="neworused1"
                  :disabled="hide2"
                  v-model="neworused"
                  @change="setType2"
                >
                Ny
              </label>
              <label for="neworused2" style="font-weight: normal;color: #7b7b7b;">
                <input
                  type="radio"
                  name="neworused"
                  value="1"
                  id="neworused2"
                  :disabled="hide2"
                  v-model="neworused"
                  @change="setType2"
                >
                Brukt
              </label>
            </form>
          </div>
          <div class="col-md-4 hidden-xs hidden-sm">
            <img src="~public/static/santander.jpg" alt style="width: 250px;margin-left:50px">
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <p style="font-weight: bold;margin-top: 30px;">3. Velg ønsket caravan du ønsker lån for</p>
            <div class="row">
              <div class="col-md-6">
                <select
                  name="select1"
                  id
                  class="form-control"
                  @change="setType3"
                  v-model="productid"
                >
                  <option value="0">Velg modell</option>
                  <!-- <option :value="product.id" v-for="product in filteredproducts" v-if="product.vin">{{ product.name }} ( {{product.vin}} )</option>
                  <option :value="product.id" v-for="product in filteredproducts" v-else>{{ product.name }} </option>-->
                  <option
                    :value="product.id"
                    v-for="product in filteredproducts"
                    :key="product.id"
                  >{{ product.name }}</option>
                  <!-- DevC -->
                </select>
              </div>
            </div>

            <div style="height:1px;background-color: #e6e6e6;margin: 20px 0px;"></div>

            <div class="row">
              <div class="col-md-4">
                <p>PRIS</p>
                <input
                  type="text"
                  style="font-size: 16px;padding: 10px 20px;width:80%;margin-bottom:20px"
                  v-model="price"
                  readonly
                >
                <span
                  style="padding: 12px;background: white;border: 1px solid #b9b9b9;border-left: 0;padding-bottom:13px"
                >KR</span>
                <vue-slider
                  ref="price"
                  v-model="price"
                  tooltip="none"
                  :min="0"
                  :max="1000000"
                  :interval="10000"
                  disabled
                ></vue-slider>
              </div>
              <div class="col-md-4">
                <p>EGENKAPITAL</p>
                <input
                  type="text"
                  style="font-size: 16px;padding: 10px 20px;width:80%;margin-bottom:20px"
                  v-model="equity"
                >
                <span
                  style="padding: 12px;background: white;border: 1px solid #b9b9b9;border-left: 0;padding-bottom:13px"
                >KR</span>
                <vue-slider
                  ref="slider2"
                  v-model="equity"
                  tooltip="none"
                  :min="0"
                  :max="price"
                  :interval="1000"
                ></vue-slider>
              </div>
              <div class="col-md-4">
                <p>NEDBETALINGSTID</p>
                <input
                  type="text"
                  style="font-size: 16px;padding: 10px 20px;width:80%;margin-bottom:20px"
                  v-model="year"
                >
                <span
                  style="padding: 12px;background: white;border: 1px solid #b9b9b9;border-left: 0;padding-bottom:13px"
                >år</span>
                <vue-slider
                  ref="year"
                  v-model="year"
                  tooltip="none"
                  :min="1"
                  :max="15"
                  :interval="1"
                ></vue-slider>
              </div>
            </div>
            <p style="font-weight: bold;margin-top: 30px;">4. Fyll inn din informasjon</p>
            <div class="row">
              <div class="col-md-4">
                <p style="margin: 0;font-size: 0.8em;font-weight: bold;">REGISTRERINGSNUMMER</p>
                <input
                  type="text"
                  style="font-size: 16px;padding: 10px 20px;margin-bottom:20px;width: 90%;"
                  v-model="ssn"
                  :class="{ error:showErrorRegis}"
                  @change="regisInput"
                  readonly="readonly"
                >
              </div>
              <div class="col-md-4">
                <p style="margin: 0;font-size: 0.8em;font-weight: bold;">TELEFONNUMMER</p>
                <input
                  type="text"
                  style="font-size: 16px;padding: 10px 20px;margin-bottom:20px;width: 90%;"
                  v-model="phone"
                  :class="{ error:showErrorPhone}"
                  @change="phoneInput"
                >
              </div>
              <div class="col-md-4">
                <p style="margin: 0;font-size: 0.8em;font-weight: bold;">E-POST</p>
                <input
                  type="email"
                  style="font-size: 16px;padding: 10px 20px;margin-bottom:20px;width: 90%;"
                  v-model="email"
                  :class="{ error:showErrorEmail}"
                  @change="emailInput"
                >
              </div>
            </div>

            <p style="font-weight: bold;margin-top: 30px;">5. Jeg vil beregne lån til</p>
            <form action>
              <label for="radio1" style="font-weight: normal;margin-right: 30px;color: #7b7b7b;">
                <input type="radio" name="caravan" value="1" id="radio1" v-model="caravan">
                Caravan
              </label>
              <label for="radio2" style="font-weight: normal;color: #7b7b7b;">
                <input type="radio" name="caravan" value="0" id="radio2" v-model="caravan">
                Caravan uten kaskoforsikring
              </label>
            </form>
          </div>
        </div>

        <div style="height:1px;background-color: #e6e6e6;margin: 20px 0px;"></div>

        <div class="row">
          <div class="col-md-12" style="margin-top:20px">
            <button
              style="background: rgb(78, 148, 206);border: 0px;color: white;padding: 10px 20px;border-radius: 8px;"
              @click="getresult"
              :disabled="disabled"
              v-html="buttonText"
            ></button>
          </div>
        </div>
        <div style="height:1px;background-color: #e6e6e6;margin: 20px 0px;"></div>
        <template v-if="showResult">
          <div class="row">
            <div class="col-md-4">
              <div style="text-align:center">
                <p style="font-size: 0.8em;color: #a2a2a2;margin: 0;">Du trenger å låne</p>
                <p>{{TotalCost}} kr</p>
              </div>
            </div>
            <div class="col-md-4">
              <div style="text-align:center">
                <p style="font-size: 0.8em;color: #a2a2a2;margin: 0;">Beløp per måne</p>
                <p>{{Math.floor(TotalMonthlyCost) }} kr</p>
              </div>
            </div>
            <div class="col-md-4">
              <div style="text-align:center">
                <p style="font-size: 0.8em;color: #a2a2a2;margin: 0;">Nominell rente</p>
                <p>{{NominalInterest}} %</p>
              </div>
            </div>
          </div>

          <div style="height:1px;background-color: #e6e6e6;margin: 20px 0px;"></div>

          <div
            class="row"
            style="display: flex;justify-content: space-between;width: 100%;margin: 0;align-items: center;"
          >
            <div style="width:50%;">
              <button
                style="background: rgb(78, 148, 206);border: 0px;color: white;padding: 10px 20px;border-radius: 8px;"
                @click="submitrequest"
                :disabled="disabled2"
                v-html="buttonText2"
              ></button>
            </div>
            <div style="width:50%;"></div>
          </div>
          <div class="row" v-if="successMessage" style="margin-top: 20px;">
            <span
              style="padding: 10px;background: #00b98c;color: white;"
            >Din lånesøknad er sendt inn. Vi vil ta kontakt i løpet av kort tid.</span>
          </div>
        </template>
      </div>

      <div class="row" style="padding: 20px 40px">
        <div class="col-md-12">
          <p style="font-size: 1.2em;font-weight: bold;margin:0">Hvem passer caravanlån for?</p>
          <p
            style="width: 65%;color: #8b8b8b;font-size: 0.9em;margin-bottom:50px"
          >Caravanlån passer for deg som trenger lån til å kjøpe ny eller brukt bobil eller campingvogn. For å få lån må du være minimum 20 år og være bosatt i Norge.</p>
        </div>
        <div class="col-md-12">
          <p style="font-size: 1.2em;font-weight: bold;margin:0">Har du spørsmål rundt caravanlån?</p>
          <p
            style="width: 65%;color: #8b8b8b;font-size: 0.9em;margin-bottom:50px"
          >Send oss en e-post til salg@icaravan.no eller ring kundeservice på +47 954 34 356.Vi ser frem til å høre om dine behov og ønsker.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import vueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

export default {
  name: "finance-view",

  components: {
    vueSlider
  },

  data() {
    return {
      showResult: false,
      disabled: false,
      disabled2: false,
      buttonText: "Kalkuler lån",
      buttonText2:
        'Søk om dette lånet <i class="fa fa-caret-right" style="margin-left:20px"></i>',
      caravan: 1,
      price: 50000,
      equity: 0,
      year: 1,
      ibobil: 1,
      NominalInterest: 4.45,
      TotalMonthlyCost: 331,
      TotalCost: 18451,
      title: "CreateSite",
      user: {
        errors: [],

        _id: "",
        villa: "",
        email: ""
      },
      infos: [],

      top_banner_image: "",
      top_banner_title: "",
      article_1: "",
      article_2: "",
      article_3: "",
      article_4: "",
      side_images: [],
      slider_images: [],
      middle_banner_image: "",
      middle_slider_images: [],
      address: "",
      email: "",
      phone: "",
      slider1: 1,
      slider2: 1,
      slider3: 1,
      hide2: false,
      products: [],
      filteredproducts: [],
      neworused: "",
      productid: 0,
      product: "",
      ssn: "",
      phone: "",
      email: "",
      showErrorRegis: false,
      showErrorPhone: false,
      showErrorEmail: false,
      successMessage: false,
      responseData: []
    };
  },

  computed: {
    _products() {
      return this.$store.state.products.filter(product => {
        return product.active == 1 && product.adata.prices;
      });
    },
    _filterProducts() {
      return this.$store.state._products.filter(product => {
        return product.type == "mobile-home" && product.adata.mileage;
      });
    },
    metaDescription() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "finance_meta_description";
      });

      return temp ? temp.value : 'undefined';
    },
    metaTitle() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "finance_meta_title";
      });

      return temp ? temp.value : 'undefined';
    }
  },
  asyncData({ store, route }) {
    return store.dispatch("FETCH_ALL_DATA").then(() => {
      if (!store.state.homeData) return store.dispatch("FETCH_HOME_DATA");
      return;
    });
  },

  title() {
    return this.metaTitle;
  },

  description() {
    return this.metaDescription;
  },
  methods: {
    setType() {
      if (this.ibobil == 1) {
        this.hide2 = false;
        this.productid = 0;
        this.filteredproducts = [];
        this.neworused = "";
      } else {
        this.hide2 = true;
        this.productid = 0;
        this.filteredproducts = this._products.filter(product => {
          return product.type == "caravan";
        });
      }
    },
    setType2() {
      if (this.neworused == 0) {
        this.filteredproducts = this._products.filter(product => {
          return product.type == "mobile-home" && !product.adata.mileage;
        });
        this.productid = 0;
      } else {
        this.filteredproducts = this._products.filter(product => {
          return product.type == "mobile-home" && product.adata.mileage;
        });
        this.productid = 0;
      }
    },
    setType3() {
      this.product = this.filteredproducts.filter(product => {
        return product.id == this.productid;
      })[0];
      this.price = parseInt(this.product.adata.prices.main);
      this.disabled = false;
      this.ssn = this.product.adId; // Registeration Number Adding in finn Loan Calculator
    },
    regisInput() {
      this.showErrorRegis = false;
    },
    phoneInput() {
      this.showErrorPhone = false;
    },
    emailInput() {
      this.showErrorEmail = false;
    },
    getresult() {
      if (!this.product) {
        return;
      } else {
        var self = this;
        this.disabled = true;
        this.buttonText =
          '<i class="fa fa-spinner fa-spin"></i> Kalkulering lån';

        axios
          .post("https://ibobil.fantasylab.io/api/auth/finance", {
            caravan: this.caravan,
            ibobil: this.ibobil,
            price: this.price,
            equity: this.equity,
            year: this.year
          })
          .then(response => {
            var data = JSON.parse(response.data.additional);
            self.NominalInterest = data.NominalInterest;
            self.TotalMonthlyCost = data.TotalMonthlyCost;
            self.TotalCost = data.LoanAmount;
            self.disabled = false;
            self.buttonText = "Kalkuler lån";
            self.showResult = true;
          })
          .catch(error => {
            console.log("error:", error);
          });
      }
    },
    submitrequest() {
      var self = this;
      if (
        !this.product ||
        !this.ssn ||
        !this.phone ||
        !this.email ||
        !this.NominalInterest ||
        !this.TotalMonthlyCost ||
        !this.TotalCost
      ) {
        if (!this.ssn) {
          this.showErrorRegis = true;
        }
        if (!this.phone) {
          this.showErrorPhone = true;
        }
        if (!this.email) {
          this.showErrorEmail = true;
        }
        return;
      }
      this.showErrorRegis = this.showErrorPhone = this.showErrorEmail = false;
      this.disabled2 = true;
      this.buttonText2 =
        '<i class="fa fa-spinner fa-spin"></i> Sender inn lånesøknad';
      axios
        .post("https://ibobil.fantasylab.io/api/auth/loan", {
          id: this.product.id,
          equity: this.equity,
          year: this.year,
          ssn: this.ssn,
          phone: this.phone,
          email: this.email
        })
        .then(response => {
          if (response.status === 200) {
            self.successMessage = true;
            self.responseData = JSON.parse(response.data);
          } else {
            console.log(data.data);
          }

          this.disabled2 = false;
          this.buttonText2 =
            'Søk om dette lånet <i class="fa fa-caret-right" style="margin-left:20px"></i>';
        })
        .catch(error => {
          console.log("error:", error);
        });
    }
  },
  mounted() {
    document.querySelector("#app").scrollTo(0, 0);
  }
};
</script>

<style scoped>
.image-style {
  height: 200px;
  width: auto;
}
.error {
  border: 1px solid red;
}

.sub-heading-finance {
  width: 300px;
}
@media only screen and (max-width: 580px) {
  .sub-heading-finance {
    width: auto;
  }
}
</style>

