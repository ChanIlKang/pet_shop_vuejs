<template>
  <Header :cartItemCount="cartItemCount"></Header>

  <div class="col-md-10 col-md-offset-1">
    <div class="row">
      <div class="card">
        <div class="card-header">애완용품샵 체크아웃</div>
        <div class="card-body">
          <div class="form-check">
            <div class="col-md-12">
              <h4><strong>정보를 입력하세요</strong></h4>
            </div>
          </div>

          <!--            name-->
          <div class="form-check d-flex justify-content-between">
            <div class="col-md-6">
              <strong>이름:</strong>
              <input required v-model.lazy.trim="order.firstName" class="form-control">
            </div>
            <div class="col-md-6">
              <strong>성:</strong>
              <input required v-model.lazy.trim="order.lastName" class="form-control">
            </div>
          </div>

          <!--            address-->
          <div class="form-check">
            <div class="col-md-12"><strong>주소:</strong></div>
            <div class="col-md-12">
              <input required v-model.trim="order.address" class="form-control">
            </div>
          </div>

          <!--            city-->
          <div class="form-check">
            <div class="col-md-12"><strong>도시:</strong></div>
            <div class="col-md-12">
              <input required v-model.trim="order.city" class="form-control">
            </div>
          </div>

          <!--            state and zipcode-->
          <div class="form-check d-flex justify-content-between">
            <!--              state-->
            <div class="col-md-2">
              <strong>주:</strong>
              <select required v-model="order.state" class="form-control">
                <option disabled value="">주</option>
                <option v-for="(state, key) in states" :key="key" v-bind:value="state">
                  {{ key }}
                </option>
              </select>
            </div>
            <!--              zipcode-->
            <div class="col-md-6 col-md-offset-4">
              <strong>우편번호:</strong>
              <input required type="number"
                     v-model.number="order.zip"
                     class="form-control">
            </div>
          </div>

          <!--            gift-->
          <div class="form-check">
            <div class="form-check">
              <div class="col-md-6 boxes">
                <input type="checkbox"
                       id="gift"
                       value="true"
                       v-bind:true-value="order.sendGift"
                       v-bind:false-value="order.dontSendGift"
                       v-model="order.gift">
                <label for="gift">선물로 보내기?</label>
              </div>
            </div>
            <div class="form-check">
              <div class="col-md-6 boxes">
                <input type="radio"
                       id="home"
                       :value="order.home"
                       v-model="order.method">
                <label for="home">자택</label>
                <input type="radio"
                       id="business"
                       :value="order.business"
                       v-model="order.method">
                <label for="business">직장</label>
              </div>
            </div>
          </div>

          <!--            order button-->
          <div class="form-check">
            <div class="col-md-6">
              <button type="submit" class="btn btn-primary submit" v-on:click="submitForm">
                주문하기
              </button>
            </div>
          </div>

          <!--            verify card-->
          <div class="col-md-12 verify">
                <pre>
                  이름: {{ order.firstName }}
                  성: {{ order.lastName }}
                  주소: {{ order.address }}
                  도시: {{ order.city }}
                  주: {{ order.state }}
                  우편번호: {{ order.zip }}
                  배송지: {{ order.method }}
                  선물: {{ order.gift }}
                </pre>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "Form-",
  props:['cartItemCount'],
  components: {Header},
  data() {
    return{
      states: {
        AL: '알라바마',
        AK: '알래스카',
        AR: '애리조나',
        CA: '캘리포니아',
        NV: '네바다'
      },
      order: {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zip: '',
        state: '',
        method: 'Home',
        gift: '',
        home: 'Home',
        business: 'Business',
        sendGift: 'Send a gift',
        dontSendGift: `Don't send a gift`
      }
    }
  },
  methods: {
    submitForm() {
      alert('submited!')
    },
  }
}
</script>

<style scoped>

</style>