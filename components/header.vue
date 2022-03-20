<template>
  <div
    class="
      mx-16
      py-36
      lg:mx-32
      md:grid md:grid-cols-3
      items-center
      font-poppins
    "
  >
    <div class="col-span-2">
      <!-- <div class="text-sm text-gray-600">HELLO</div> -->
      <div class="wrapper">
        <div class="verticalFlip text-lg text-gray-600 uppercase">
          <span>Hello</span>
          <span>សួស្តី</span>
          <span>Holà</span>
          <span>Bonjour</span>
          <span>こんにちは。</span>
        </div>
      </div>
      <div class="text-3xl font-light text-blue-900 py-2">
        I'm <span class="font-semibold">{{ data.main.name }}</span>
      </div>
      <div class="font-light text-sm text-gray-400">
        {{ data.main.occupation }}
      </div>
    </div>
    <div class="px-4 flex justify-center pt-12">
      <img
        :src="data.main.profile"
        alt="myphoto"
        class="object-cover h-40 w-40 p-1 rounded-full border border-indigo-800"
      />
    </div>
  </div>
</template>

<script>
import data from "~/static/api/data.json";
export default {
  data() {
    return {
      data: data,
    };
  },
};
</script>

<style scoped>
.wrapper {
  /* background-color: rgb(181, 181, 181); */
  padding: 0px 0px 25px 0px;
  position: relative;
}
/*Vertical Flip*/
.verticalFlip {
  display: inline;
}
.verticalFlip span {
  animation: vertical 12.5s linear infinite 0s;
  -ms-animation: vertical 12.5s linear infinite 0s;
  -webkit-animation: vertical 12.5s linear infinite 0s;
  color: #888888;
  opacity: 0;
  overflow: hidden;
  position: absolute;
}
.verticalFlip span:nth-child(2) {
  animation-delay: 2.5s;
  -ms-animation-delay: 2.5s;
  -webkit-animation-delay: 2.5s;
}
.verticalFlip span:nth-child(3) {
  animation-delay: 5s;
  -ms-animation-delay: 5s;
  -webkit-animation-delay: 5s;
}
.verticalFlip span:nth-child(4) {
  animation-delay: 7.5s;
  -ms-animation-delay: 7.5s;
  -webkit-animation-delay: 7.5s;
}
.verticalFlip span:nth-child(5) {
  animation-delay: 10s;
  -ms-animation-delay: 10s;
  -webkit-animation-delay: 10s;
}

/*Vertical Flip Animation*/
@-moz-keyframes vertical {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 0;
    -moz-transform: rotateX(180deg);
  }
  10% {
    opacity: 1;
    -moz-transform: translateY(0px);
  }
  25% {
    opacity: 1;
    -moz-transform: translateY(0px);
  }
  30% {
    opacity: 0;
    -moz-transform: translateY(0px);
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes vertical {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 0;
    -webkit-transform: rotateX(180deg);
  }
  10% {
    opacity: 1;
    -webkit-transform: translateY(0px);
  }
  25% {
    opacity: 1;
    -webkit-transform: translateY(0px);
  }
  30% {
    opacity: 0;
    -webkit-transform: translateY(0px);
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@-ms-keyframes vertical {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 0;
    -ms-transform: rotateX(180deg);
  }
  10% {
    opacity: 1;
    -ms-transform: translateY(0px);
  }
  25% {
    opacity: 1;
    -ms-transform: translateY(0px);
  }
  30% {
    opacity: 0;
    -ms-transform: translateY(0px);
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>