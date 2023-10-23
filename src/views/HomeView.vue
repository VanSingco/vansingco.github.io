<template>
  <main class="relative w-full h-full overflow-hidden home scroll-smooth">
    <nav class="hidden fixed z-50 top-0 h-[60px] w-full sm:flex justify-center items-center px-5 bg-black/10  backdrop-blur-xl">
      <ul class="flex">
          <li>
            <a href="#" v-scroll-to="'#home'" @click="activeMenu = 'home'"  :class="`px-6 py-2 rounded-md ${activeMenu == 'home' ? 'bg-white/10 backdrop-blur-xl' : ''}`">Home</a>
          </li>
          <li>
            <a href="#" v-scroll-to="'#skills'" @click="activeMenu = 'skills'" :class="`px-6  py-2  rounded-md ${activeMenu == 'skills' ? 'bg-white/10 backdrop-blur-xl' : ''}`">Skills</a>
          </li>
          <li>
            <a href="#" v-scroll-to="'#aboutme'" @click="activeMenu = 'aboutme'" :class="`px-6  py-2  rounded-md ${activeMenu == 'aboutme' ? 'bg-white/10 backdrop-blur-xl' : ''}`">About Me</a>
          </li>
          <li>
            <a href="#" v-scroll-to="'#portfolio'" @click="activeMenu = 'portfolio'" :class="`px-6  py-2 rounded-md ${activeMenu == 'portfolio' ? 'bg-white/10 backdrop-blur-xl' : ''}`">Portfolio</a>
          </li>
          <li>
            <a href="#" v-scroll-to="'#published'" @click="activeMenu = 'published'" :class="`px-6  py-2 rounded-md ${activeMenu == 'published' ? 'bg-white/10 backdrop-blur-xl' : ''}`">Published</a>
          </li>
          <li>
            <a href="#" v-scroll-to="'#hireme'" @click="activeMenu = 'hireme'" :class="`px-6  py-2 rounded-md ${activeMenu == 'hireme' ? 'bg-white/10 backdrop-blur-xl' : ''}`">Hire Me</a>
          </li>
      </ul>
    </nav>
    <nav class="fixed top-0 z-50 w-full px-5 sm:hidden bg-black/10 backdrop-blur-xl">
      <div class="flex justify-between items-center w-full h-[60px]">
        <a href="#" v-scroll-to="'#home'"></a>
        <div class="cursor-pointer" @click="isOpenNavbar = !isOpenNavbar">
          <svg v-if="!isOpenNavbar" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
          </svg>
        </div>
      </div>
        <ul v-if="isOpenNavbar" class="w-full">
          <li :class="`mb-3 px-6 py-2 rounded-md w-full ${activeMenu == 'home' ? 'bg-white/10 backdrop-blur-xl' : ''}`">
            <a href="#" v-scroll-to="'#home'" @click="activeMenu = 'home'" >Home</a>
          </li>
          <li :class="`mb-3 px-6 py-2 rounded-md w-full ${activeMenu == 'skills' ? 'bg-white/10 backdrop-blur-xl' : ''}`">
            <a href="#" v-scroll-to="'#skills'" @click="activeMenu = 'skills'">Skills</a>
          </li>
          <li :class="`mb-3 px-6 py-2 rounded-md w-full ${activeMenu == 'aboutme' ? 'bg-white/10 backdrop-blur-xl' : ''}`">
            <a href="#" v-scroll-to="'#aboutme'" @click="activeMenu = 'aboutme'">About Me</a>
          </li>
          <li :class="`mb-3 px-6 py-2 rounded-md w-full ${activeMenu == 'portfolio' ? 'bg-white/10 backdrop-blur-xl' : ''}`">
            <a href="#" v-scroll-to="'#portfolio'" @click="activeMenu = 'portfolio'">Portfolio</a>
          </li>
          <li :class="`mb-3 px-6 py-2 rounded-md w-full ${activeMenu == 'published' ? 'bg-white/10 backdrop-blur-xl' : ''}`">
            <a href="#" v-scroll-to="'#published'" @click="activeMenu = 'published'">Published</a>
          </li>
          <li :class="`mb-3 px-6 py-2 rounded-md w-full ${activeMenu == 'hireme' ? 'bg-white/10 backdrop-blur-xl' : ''}`">
            <a href="#" v-scroll-to="'#hireme'" @click="activeMenu = 'hireme'">Hire Me</a>
          </li>
      </ul>
    </nav>
    <div class="flex items-center justify-center">
      <div class="container">
        <!-- header -->
        <div id="home" class="pt-[100px] home__header grid grid-cols-1 sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12 items-center">
          <div class="order-last col-span-1 pl-8 md:order-first sm:col-span-1 md:col-span-6 lg:col-span-6 md:pl-14">
            <h4 class="text-[25px] md:text-[30px] font-bold"><span>{{`<`}}</span> <span class="text-white">Hello</span> <span>{{`/>`}}</span></h4>
            <h1 class="text-[30px] md:text-[45px] font-bold capitalize">I'm <span class="text-white text-[30px md:text-[45px] font-bold">Van Zachary Singco</span>, Full-Stack Web Developer.</h1>
            <p class="mt-5 text-[15px] md:text-[20px]">Full-stack web developer with experience and passionate about designing and creating dynamic useful applications.</p>
            <div class="mt-10">
              <a href="#" v-scroll-to="'#hireme'" class="px-[45px] py-[15px] rounded-xl bg-[#34231B]/50 text-white text-[20px] font-medium">Hire Me</a>
            </div>
          </div>
          <div class="flex justify-center order-first col-span-1 md:order-last sm:col-span-1 md:col-span-6 lg:col-span-6">
              <img src="/images/my-profile.svg" alt="" class="w-[400px] md:w-[520px] ">
          </div>
        </div>
        <!-- about me -->
        <!-- <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12 mt-28">
          <div class="col-span-1 sm:col-span-1 md:col-span-6 lg:col-span-6">

          </div>
          <div class="col-span-1 sm:col-span-1 md:col-span-6 lg:col-span-6">
            <div class="max-w-[700px]">
              <h4 class="text-[30px] font-bold mb-5"><span>{{`<`}}</span> <span class="text-white">About Me</span> <span>{{`/>`}}</span></h4>
              <p class="mb-4 text-[20px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique animi, itaque impedit iusto debitis blanditiis sunt? Natus, molestiae. Eveniet temporibus beatae magni porro quis deleniti, saepe alias vitae totam esse.</p>
              <p class="mb-4 text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et expedita repudiandae nulla esse officia inventore aut eius mollitia excepturi maiores facere quas perferendis quaerat a sint sit, cupiditate error nobis.</p>
            </div>
          </div>
        </div> -->
        <!-- skills -->
        <div class="relative pt-10" id="skills">
          <div class="grid grid-cols-12 gap-4 px-5 skill__header sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 md:gap-10 mt-28 md:px-20">
            <div class="col-span-12 mb-10 sm:col-span-12 md:col-span-12 lg:col-span-12">
              <h4 class="text-[30px] font-bold md:mb-5 text-center"><span>{{`<`}}</span> <span class="font-bold text-white">Skills</span> <span>{{`/>`}}</span></h4>
            </div>
            <div v-for="skill in skills" class="col-span-6 sm:col-span-3 md:col-span-4 lg:col-span-2 p-3 rounded-2xl bg-[#3C2A21]/10 border border-[#3C2A21]/30 backdrop-blur-xl w-full">
              <div class="flex flex-col items-center justify-center">
                <div class="">
                  <img :src="`https://skillicons.dev/icons?i=${skill.icon}`" class="w-[30px]" />
                </div>
                <div class="mt-3 text-center">
                  <h4 class="text-[16] font-bold">{{skill.name}}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>


        <!-- skills -->
        <div class="relative pt-10" id="aboutme">
          <div class="grid content-center grid-cols-12 gap-4 px-5 skill__header sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 md:gap-10 mt-28 md:px-20">
            <div class="col-span-12 mb-10 sm:col-span-12 md:col-span-12 lg:col-span-12">
              <h4 class="text-[30px] font-bold md:mb-5 text-center"><span>{{`<`}}</span> <span class="font-bold text-white">About Me</span> <span>{{`/>`}}</span></h4>
            </div>
          </div>
          <div class="flex justify-center px-5">
            <div class="mt-5 w-full md:w-[600px] lg:w-[1000px]">
              <h2 class="text-[18px] md:text-[25px] font-bold capitalize mb-4">Hello!</h2>
              <p class="text-[15px] md:text-[20px] text-white mb-3">
                My name is Van Zachary V. Singco, and I'm a passionate Full-Stack Web Developer that uses web technologies to build amazing
                applications.
              </p>
              <p class="text-[15px] md:text-[20px] text-white mb-3">
                I have 4 years of experience in web development, 3 year in frontend, 2 year in backend, and 2 years in full-stack web development.
              </p>
              <p class="text-[15px] md:text-[20px] text-white mb-3">
                With my experience, I gained a strong foundation in various programming languages and web frameworks such as Javascript, PHP, Python, ReactJS, VueJS, and Laravel, and I continually expand my knowledge through self-study and professional development opportunities.
              </p>
              <p class="text-[15px] md:text-[20px] text-white mb-3">
                I am excited to continue growing my skills and contributing to innovative and challenging projects in the web development industry.
              </p>
            </div>
          </div>
        </div>
        <!-- portfolio -->
        <div id="portfolio" class="grid grid-cols-1 gap-10 px-5 pt-16 sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12 mt-28 md:px-20">
          <div class="col-span-1 mb-10 sm:col-span-1 md:col-span-12 lg:col-span-12">
            <h4 class="text-[30px] font-bold md:mb-5 text-center"><span>{{`<`}}</span> <span class="font-bold text-white">Portfolio</span> <span>{{`/>`}}</span></h4>
          </div>

          

          <div v-for="portfolio in portfolio_list" class="col-span-1 overflow-hidden sm:col-span-1 md:col-span-6 lg:col-span-4 rounded-2xl bg-[#3C2A21]/10 border border-[#3C2A21]/30 backdrop-blur-xl w-full">
            <img :src="portfolio.cover_photo" class="w-full h-[200px]" alt="">
            <div class="relative p-5">
              <div class="flex">
                <img :src="portfolio.logo" class="w-[80px] h-[80px] rounded-2xl bg-gray-500/30 backdrop-blur-xl p-3 mt-[-50px]" style="object-fit: contain;" alt="">
                <h2 class="ml-5 text-[16px] font-bold">{{portfolio.title}}</h2>
              </div>
              <div class="mt-5">
                <button @click="openModal(portfolio)" class="px-[35px] py-[10px] w-full text-center rounded-md bg-[#34231B]/50 text-white text-[14px] font-medium">View Detail</button>
              </div>
            </div>
            
          </div>
        </div>

        <div id="published" class="grid grid-cols-1 gap-10 px-5 pt-16 sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12 mt-28 md:px-20">
          <div class="col-span-1 sm:col-span-1 md:col-span-12 lg:col-span-12 md:mb-10">
            <h4 class="text-[30px] font-bold md:mb-5 text-center"><span>{{`<`}}</span> <span class="font-bold text-white">Published</span> <span>{{`/>`}}</span></h4>
          </div>
          <div class="col-span-1 sm:col-span-1 md:col-span-6 lg:col-span-6">
            <div class="mt-8">
              <h1 class="text-[25px] font-bold">Primary Author of OCR-based Hybrid Image Text Summarizer using Luhn Algorithm with Finetune Transformer Models for Long Document</h1>
              <p class="mt-5 text-[19px]">The main purpose of this research is to assist readers in speeding up the process of digitalizing and summarizing the image document by allowing them to digitalize and summarize the text from the image in the system.</p>
              <div class="mt-20 mb-10 md:mb-0">
                <a href="https://www.researchgate.net/publication/367944125_OCR-based_Hybrid_Image_Text_Summarizer_using_Luhn_Algorithm_with_Finetune_Transformer_Models_for_Long_Document" target="_blank" class="px-[45px] py-[15px] w-full md:w-auto rounded-xl bg-[#34231B]/50 text-white text-[20px] font-medium">View Link</a>
              </div>
            </div>
          </div>
          <div class="col-span-1 sm:col-span-1 md:col-span-6 lg:col-span-6">
            <PDFViewer
              source="/pdf/IJETAE_0223_07.pdf"
              style="height:500px;  width: 100%"
              class="rounded-2xl"
              @download="handleDownload"
            />
          </div>
        </div>

        <!-- Hire Me -->
        <div id="hireme" class="grid grid-cols-1 gap-10 px-5 pt-16 hire__header sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12 mt-28 md:px-20">
          <div class="col-span-1 sm:col-span-1 md:col-span-12 lg:col-span-12 md:mb-10">
            <h4 class="text-[30px] font-bold md:mb-5 text-center"><span>{{`<`}}</span> <span class="font-bold text-white">Hire Me</span> <span>{{`/>`}}</span></h4>
          </div>
          <div class="col-span-1 sm:col-span-1 md:col-span-6 lg:col-span-6">
            <div class="flex items-center mt-10 mb-10">
              <div class="mr-5 rounded-2xl bg-[#3C2A21]/30 backdrop-blur-2xl  border border-[#3C2A21]/50 w-[60px] h-[60px] flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </div>
              <div>
                <p class="text-[20px] font-semibold" style="word-break: break-word;">https://github.com/VanSingco</p>
              </div>
            </div>
            <div class="flex items-center mb-10">
              <div class="mr-5 rounded-2xl bg-[#3C2A21]/30 backdrop-blur-2xl  border border-[#3C2A21]/50 w-[60px] h-[60px] flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16">
                  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
                  <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
                </svg>
              </div>
              <div>
                <p class="text-[20px] font-semibold">vanzachary19@gmail.com</p>
              </div>
            </div>
            <div class="flex items-center mb-10">
              <div class="mr-5 rounded-2xl bg-[#3C2A21]/30 backdrop-blur-2xl  border border-[#3C2A21]/50 w-[60px] h-[60px] flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
              </div>
              <div>
                <p class="text-[20px] font-semibold">+63 951-8185-647</p>
              </div>
            </div>
          </div>
          <div class="col-span-1 sm:col-span-1 md:col-span-6 lg:col-span-6">
            <form action="" method="post" @submit.prevent="sendEmail">
              <div class="mb-5">
                <label for="" class="mx-2 mb-5">Name</label>
                <input type="text" v-model="emailData.from_name" required placeholder="Enter your name" class="mt-3 bg-gray-500/10 backdrop-blur-2xl border border-white/10 text-white text-[16px] w-full py-4 px-5 rounded-xl">
              </div>
              <div class="mb-5">
                <label for="" class="mx-2 mb-5">Email</label>
                <input type="email" v-model="emailData.email" required placeholder="Enter your email" class="mt-3 bg-gray-500/10 backdrop-blur-2xl border border-white/10 text-white text-[16px] w-full py-4 px-5 rounded-xl">
              </div>
              <div class="mb-5">
                <label for="" class="mx-2 mb-5">Message</label>
                <textarea placeholder="Enter your message" v-model="emailData.message" required class="mt-3 bg-gray-500/20 backdrop-blur-2xl border border-white/10 text-white text-[16px] w-full py-4 px-5 rounded-xl" name="" id="" cols="30" rows="5"></textarea>
              </div>
              <div class="">
                <button type="submit" class="px-5 py-4 w-full flex items-center justify-center text-center rounded-xl bg-[#34231B]/50 text-white text-[14px] font-medium">
                  <svg v-if="loading" class="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span class="ml-3">Send Email</span>
                </button>
              </div>
            </form>
          </div>

        </div>
        <!-- body -->
        <div class="h-[70px] w-full flex justify-center items-center text-center mt-20">
          <p class="text-[18px]">© {{ new Date().getFullYear()  }} All Rights Reserved</p>
        </div>
      </div>
    </div>

    <!-- modal -->
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>
  
        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex items-center justify-center min-h-full p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="mt-14 w-full max-w-7xl min-h-[650px] transform overflow-hidden rounded-2xl bg-[#3C2A21]/10 backdrop-blur-2xl  border border-[#3C2A21]/30  text-left align-middle shadow-xl transition-all"
              >
                <div v-if="currentPortfolio" class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-12">
                  <div class="col-span-1 sm:col-span-1 md:col-span-7 lg:col-span-8 max-h-[650px] overflow-y-auto">
                    <img :src="currentPortfolio.long_photo" alt="">
                  </div>
                  <div class="col-span-1 sm:col-span-1 md:col-span-5 lg:col-span-4">
                    <div class="relative p-5">
                      <div class="flex items-center">
                        <img :src="currentPortfolio.logo" class="w-[60px] h-[60px] rounded-2xl bg-gray-300/30 backdrop-blur-xl p-3" style="object-fit: contain;" alt="">
                        <h2 class="ml-5 text-[18px] font-bold">{{currentPortfolio.title}}</h2>
                      </div>
                      <div class="mt-5">
                        {{ currentPortfolio.description }}
                      </div>
                      <div class="mt-8">
                        <h6 class="mb-3 font-bold">Technology Used:</h6>
                        <img :src="`https://skillicons.dev/icons?i=${currentPortfolio.icons}`" />
                      </div>
                      <div class="w-full mt-16 mb-5">
                        <a :href="currentPortfolio.link"  class="px-[45px] py-[15px] w-full text-center rounded-md bg-[#34231B] text-white text-[14px] font-medium" target="_blank" rel="noopener noreferrer">Visit Link</a>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

  </main>
</template>

<script setup lang="ts">
import emailjs from '@emailjs/browser';
import PDFViewer from 'pdf-viewer-vue'
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

  const skills = [
    {name: "HTML", pecent: 100, icon: 'html'},
    {name: "CSS", pecent: 100, icon: 'css'},
    {name: "SASS", pecent: 95, icon: 'sass'},
    {name: "BOOTSTRAP", pecent: 100, icon: 'bootstrap'},
    {name: "TAILWIND", pecent: 90, icon: 'tailwind'},
    {name: "Javascript", pecent: 95, icon: 'javascript'},
    {name: "PHP", pecent: 95, icon: 'php'},
    {name: "PYTHON", pecent: 80, icon: 'python'},
    {name: "Typescript", pecent: 80, icon: 'ts'},
    {name: "VUE JS", pecent: 90, icon: 'vue'},
    {name: "NUXT JS", pecent: 90, icon: 'nuxtjs'},
    {name: "REACT JS", pecent: 80, icon: 'react'},
    {name: "NEXT JS", pecent: 70, icon: 'nextjs'},
    {name: "LARAVEL", pecent: 90, icon: 'laravel'},
    {name: "NODE JS", pecent: 80, icon: 'nodejs'},
    {name: "MYSQL", pecent: 90, icon: 'mysql'},
    {name: "MONGODB", pecent: 80, icon: 'mongodb'},
    // {name: "POSTGRES", pecent: 70, icon: 'postgres'},
    {name: "GRAPHQL", pecent: 70, icon: 'graphql'},
    {name: "GIT", pecent: 80, icon: 'git'},
  ];

  interface Portfolio {
    title: string;
    description: string;
    icons: string;
    logo: string;
    cover_photo: string;
    long_photo: string;
    link: string
  }

  const route = useRoute();

  watch([route.fullPath], () => {
    console.log('route: ', route.fullPath);
  })

  const portfolio_list: Portfolio[] = [
    {
      title: 'Creator Galaxy',
      description: "Creator Galaxy is a digital ecommerce business that specializes in video editing, photoshop, after effects, and other related services. My job is to migrate the frontend from the blade template engine to vue and redesign it, making the site mobile friendly and fast to load, as well as adding new functionalities to the application.", 
      icons: 'laravel,vue,javascript,php,sass,stripe,git,bootstrap,mysql', 
      logo: '/images/logo/creator-logo.png', 
      cover_photo: '/images/portfolio/creator-galaxy-short.png',
      long_photo: '/images/portfolio/creator-galaxy-long.png',
      link: 'https://creatorgalaxy.com',
    },
    {
      title: 'Living learning Homeschool',
      description: "A living learning homeschool is an online homeschool that offers DEPED accreditation and homeschool accountability to homeschooling families via a partner school. My job is to develop a school application from the ground up that allows them to engage with and monitor students and parents.", 
      icons: 'laravel,vue,nuxt,javascript,php,sass,git,bootstrap,tailwind,mysql', 
      logo: '/images/logo/llh-logo.png', 
      cover_photo: '/images/portfolio/llh-short-1.png',
      long_photo: '/images/portfolio/llh-long.png',
      link: 'https://llhportal.com',
    },
    {
      title: 'Loangraph',
      description: "LoanGraphs is a home value analysis and loan comparison tool that assists businesses in educating their customers and closing more sales. My duty is to maintain the application running smoothly including fixing bugs, testing it, and adding new features.", 
      icons: 'laravel,vue,nuxt,javascript,php,sass,git,tailwind,stripe,gmail,mysql', 
      logo: '/images/logo/loangraph-logo.svg', 
      cover_photo: '/images/portfolio/loangraph-short.png',
      long_photo: '/images/portfolio/loangraph-long.png',
      link: 'https://www.loangraphs.com',
    },
    {
      title: 'Vision Next',
      description: "VISION is a real-time video communications platform that allows users to create meetings, chat, group chats, and other features. My task is to maintain the application running well and to add new features such as plan subscriptions, chat systems, and more.", 
      icons: 'aws,react,ts,stripe,git', 
      logo: '/images/logo/vision-logo.svg', 
      cover_photo: '/images/portfolio/vision-next-short.png',
      long_photo: '/images/portfolio/vision-next-long.png',
      link: 'https://visionvideocommunications.us',
    },
    {
      title: 'Cleanafi',
      description: "Cleanafi is an online laundry software that provides laundry items and delivers them to your home or office. My job is to develop an application that will allow them to manage their business, such as laundry scheduling and payment systems.", 
      icons: 'laravel,vue,javascript,php,sass,git,bootstrap,stripe,mysql', 
      logo: '/images/logo/cleanafi-logo.png', 
      cover_photo: '/images/portfolio/cleanafi-short.png',
      long_photo: '/images/portfolio/cleanafi-long.png',
      link: 'https://cleanafi.com',
    },
  ];

  let currentPortfolio = ref<Portfolio | null>(null)

  const $toast = useToast();
  const activeMenu = ref('home');
  

  const isOpen = ref(false);
  const isOpenNavbar = ref(false);

  const loading = ref(false);
  const emailData = ref({
    from_name: '',
    to_name: 'Van Zachary Singco',
    email: '',
    message: ''
  });

  function handleDownload() {

  }

  function sendEmail(){
    loading.value = true;
    emailjs.send('service_73ce1np','template_ib87bz4', emailData.value, 'fkvf1l_Vkj7qfRBLM')
    .then((response) => {
      loading.value = false;
      console.log('SUCCESS!', response.status, response.text);
      
      $toast.success('Successfully send message.');
      emailData.value = {
        from_name: '',
        to_name: 'Van Zachary Singco',
        email: '',
        message: ''
      }

    }, (err) => {
      console.log('FAILED...', err);
      $toast.error('Something went wrong, please try later.');
    });
  }


  function closeModal() {
    isOpen.value = false
  }


  function openModal(portfolio: Portfolio) {
    currentPortfolio.value = portfolio;
    isOpen.value = true
  }
</script>
