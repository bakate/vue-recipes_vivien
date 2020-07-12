<template>
  <div style="padding: 2rem 3rem; text-align: left;">
    <BaseInput
      label="Facebook Account Id :"
      v-model="facebook_account_id"
      :class="[$v.facebook_account_id.$error ? 'is-danger' : '']"
      @input="$v.facebook_account_id.$touch()"
      @blur="$v.facebook_account_id.$touch()"
      placeholder="Pick your facebook account id"
    />
    <template v-if="$v.facebook_account_id.$error">
      <p v-if="!$v.facebook_account_id.required" class="help is-danger">
        Facebook account Id is required.
      </p>
      <p v-else-if="!this.$v.facebook_account_id.minLength" class="help is-danger">
        Facebook Account Id must be at least 10 letters
      </p>
    </template>
    <BaseInput
      label="Facebook Page id :"
      v-model="facebook_page_id"
      :class="[$v.facebook_page_id.$error ? 'is-danger' : '']"
      @input="$v.facebook_page_id.$touch()"
      @blur="$v.facebook_page_id.$touch()"
      placeholder="Pick your Facebook Page id"
    />
    <template v-if="$v.facebook_page_id.$error">
      <p v-if="!$v.facebook_page_id.required" class="help is-danger">
        Facebook Page Id is required.
      </p>
      <p v-else-if="!this.$v.facebook_page_id.minLength" class="help is-danger">
        Facebook Page Id must be at least 10 letters
      </p>
    </template>
    <BaseInput
      label="Ad Title :"
      v-model="ad_title"
      :class="[$v.ad_title.$error ? 'is-danger' : '']"
      @input="$v.ad_title.$touch()"
      @blur="$v.ad_title.$touch()"
      placeholder="Ad Title"
    />
    <template v-if="$v.ad_title.$error">
      <p v-if="!$v.ad_title.required" class="help is-danger">
        Ad Title is required.
      </p>
    </template>

    <div class="field">
      <label class="label">Ad Message</label>
      <div class="control">
        <textarea
          :class="['textarea', $v.ad_message.$error ? 'is-danger' : '']"
          placeholder="Textarea"
          v-model="ad_message"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { required, integer, minLength } from 'vuelidate/lib/validators'

export default {
  props: ['currentStep'],

  data() {
    return {
      ad_title: '',
      facebook_account_id: '',
      facebook_page_id: '',
      ad_message: '',
    }
  },

  validations: {
    facebook_account_id: {
      required,
      minLength: minLength(10),
    },
    ad_title: {
      required,
      integer,
    },
    facebook_page_id: {
      required,
      minLength: minLength(10),
    },
    ad_message: {
      required,
    },
  },
  // watch: {
  //   $v: {
  //     handler: function (val) {
  //       if (!val.$invalid) {
  //         this.$emit('can-continue', { value: true })
  //       } else {
  //         this.$emit('can-continue', { value: false })
  //         setTimeout(() => {
  //           this.$emit('change-next', { nextBtnValue: false })
  //         }, 3000)
  //       }
  //     },
  //     deep: true,
  //   },

  //   clickedNext(val) {
  //     console.log(val)
  //     if (val === true) {
  //       this.$v.$touch()
  //     }
  //   },
  // },
  methods: {
    canContinue() {
      this.$emit('can-continue', { value: true })
    },
  },
  mounted() {
    this.$emit('can-continue', { value: true })
  },
}
</script>
