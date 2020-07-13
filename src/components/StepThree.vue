<template>
  <section style="padding: 1rem 2rem;">
    <BaseInput
      label="Facebook Account Id :"
      v-model="facebook_account_id"
      :type="{ 'is-danger': $v.facebook_account_id.$error }"
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
      :class="{ 'is-danger': $v.facebook_page_id.$error }"
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
      :type="{ 'is-danger': $v.ad_title.$error }"
      @input="$v.ad_title.$touch()"
      @blur="$v.ad_title.$touch()"
      placeholder="Ad Title"
    />
    <template v-if="$v.ad_title.$error">
      <p v-if="!$v.ad_title.required" class="help is-danger">
        Ad Title is required.
      </p>
    </template>

    <BaseInput
      label="Ad Message"
      :type="{ 'is-danger': $v.ad_message.$error }"
      inputType="textarea"
      maxlength="200"
      placeholder="Textarea"
      v-model="ad_message"
      @input="$v.ad_message.$touch()"
      @blur="$v.ad_message.$touch()"
    ></BaseInput>
  </section>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

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
    },
    facebook_page_id: {
      required,
      minLength: minLength(10),
    },
    ad_message: {
      required,
    },
  },
}
</script>
