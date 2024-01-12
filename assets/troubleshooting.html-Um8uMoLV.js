import{_ as h,r as n,o as d,c as u,b as e,d as t,e as a,w as i,a as r}from"./app-WG35xzlA.js";const c={},p=e("h2",{id:"cemu",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cemu","aria-hidden":"true"},"#"),t(" Cemu")],-1),m={href:"http://compat.cemu.info/",target:"_blank",rel:"noopener noreferrer"},g=r('<p>We encourage our users to submit their testing results and to otherwise keep the wiki up-to-date so that everyone&#39;s questions may be answered.</p><h3 id="stuck-on-loading-crash-to-desktop-ctd-when-starting-a-game" tabindex="-1"><a class="header-anchor" href="#stuck-on-loading-crash-to-desktop-ctd-when-starting-a-game" aria-hidden="true">#</a> Stuck on &quot;Loading...&quot; / Crash to Desktop (CTD) when starting a game</h3><h4 id="cause-1" tabindex="-1"><a class="header-anchor" href="#cause-1" aria-hidden="true">#</a> Cause #1</h4><ol><li>Open <code>Task Manager</code> on Windows</li><li>Click the <code>(^) More details</code> button if necessary</li><li>Navigate to the <code>Details</code> tab</li><li>Make sure Cemu.exe is not available in your process list before trying to run Cemu again - that it is otherwise fully closed</li></ol><p>There is an issue recently where Cemu.exe can get stuck in the background which will cause issues for saving your games, running games, loading your shaderCache, and a wider assortment of other complications.</p><h4 id="cause-2" tabindex="-1"><a class="header-anchor" href="#cause-2" aria-hidden="true">#</a> Cause #2</h4><ol><li>Open your Cemu folder and temporarily rename your <code>shaderCache</code> folder <ul><li>This will allow you to test a fresh cache to see if the problem was related to the cache that was being used</li></ul></li><li>If renaming the <code>shaderCache</code> folder did not help, ensure Cemu is fully closed and then rename your earlier <code>shaderCache</code> folder back to the name &quot;shaderCache&quot; <ul><li>You will need to delete the one that was created by Cemu after you renamed your original copy</li></ul></li></ol><h4 id="cause-3" tabindex="-1"><a class="header-anchor" href="#cause-3" aria-hidden="true">#</a> Cause #3</h4>',8),y=e("code",null,"File",-1),f=e("code",null,"Load",-1),w=e("h4",{id:"cause-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cause-4","aria-hidden":"true"},"#"),t(" Cause #4")],-1),b=e("h4",{id:"cause-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cause-5","aria-hidden":"true"},"#"),t(" Cause #5")],-1),k=e("h3",{id:"error-this-title-is-encrypted-to-run-this-application",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#error-this-title-is-encrypted-to-run-this-application","aria-hidden":"true"},"#"),t(' "Error: This title is encrypted. To run this application ..."')],-1),_={href:"https://github.com/emiyl/dumpling",target:"_blank",rel:"noopener noreferrer"},v=e("p",null,"This error means the key that came with your encrypted game dump is not in your keys.txt file. Random keys from the internet will not work. To get the correct keys from your console without redumping the game again, you must follow this small guide:",-1),C={href:"https://wiki.cemu.info/wiki/Obtaining_Keys_for_Keys.txt",target:"_blank",rel:"noopener noreferrer"},x=r('<h3 id="error-can-t-initialise-directinput" tabindex="-1"><a class="header-anchor" href="#error-can-t-initialise-directinput" aria-hidden="true">#</a> &quot;Error: Can&#39;t initialise DirectInput&quot;</h3><p>This can be fixed by unplugging the controller and restarting your computer. After your PC has fully booted, plug the controller back in. Ensure you are using the latest official version of Cemu, it is also encouraged to be using the latest version of Windows 10/11.</p><h3 id="constant-stuttering-visual-lag-during-gameplay" tabindex="-1"><a class="header-anchor" href="#constant-stuttering-visual-lag-during-gameplay" aria-hidden="true">#</a> Constant stuttering / visual lag during gameplay</h3><p>This is caused by shaderCache creation or Vulkan&#39;s pipelineCache creation. With OpenGL and Vulkan, the shaderCache will build as you play and will eventually become nearly unnoticable. As mentioned, Vulkan also requires a pipelineCache - this cache type will build quickly and have minor stutter. Keep in mind that it has to be rebuilt from scratch every time you update your GPU driver or Cemu as a sideeffect from becoming invalidated when either of these change.</p><p>To alleviate gameplay stalls caused by shader and pipeline building, read <a href="#async-shader-compile">Async Shader Compile</a> further below.</p><h3 id="can-i-disable-preload-or-download-shader-caches" tabindex="-1"><a class="header-anchor" href="#can-i-disable-preload-or-download-shader-caches" aria-hidden="true">#</a> Can I disable, preload, or download shader caches?</h3><p>If you simply want to turn off the notification that tells you they are being made, you can do this in <code>Options</code> -&gt; <code>General settings</code> -&gt; <code>Overlay</code>.</p><p>Unfortunately, you cannot create a cache before playing the game, nor can you disable shaders or pipelines to prevent stalling. Shaders and pipelines are what allow your games to work on your GPU. If they were disabled, you would only see a black screen, with no graphical output.</p>',8),P={href:"https://chriztr.github.io/cemu_shader_and_pipeline_caches/",target:"_blank",rel:"noopener noreferrer"},S=r('<h3 id="async-shader-compile" tabindex="-1"><a class="header-anchor" href="#async-shader-compile" aria-hidden="true">#</a> Async Shader Compile</h3><p>This feature is only available for GPUs with drivers that support Vulkan 1.2 or newer; not Vulkan 1.1!</p><p>Users that fit this criteria should navigate to Cemu&#39;s <code>Options</code> -&gt; <code>General settings</code> -&gt; <code>Graphics</code> section, then enable the <code>Async shader compile</code> feature. While using <code>Async Shader Compile</code> almost all Shaders and Pipelines will be built at the same time while you are playing, greatly reducing the amount of gameplay stalling that you could encounter without this option; some temporary graphical issues should be expected. Not all shaders and pipelines can be created in this way and will still result in some minor stalling.</p><p>Newer Intel iGPUs support this feature as long as they both support Vulkan 1.2 and are using the latest available drivers. If you encounter issues while using this feature, please disable it and try again after a future driver update.</p><h3 id="i-use-steam-to-launch-cemu-what-can-happen" tabindex="-1"><a class="header-anchor" href="#i-use-steam-to-launch-cemu-what-can-happen" aria-hidden="true">#</a> I use Steam to launch Cemu, what can happen?</h3><p>Steam caches shaders on its own unless you turn this off, this majorly conflicts with <code>Async Shader Compile</code>. The symptoms are graphics or models failing to render, usually a very broken-looking game. To prevent this, look for the Shader Precaching option within Steam&#39;s settings and disable it to resolve the issue. We recommend that you do not use 3rd party launchers like Steam to launch Cemu due to potential problems that we have no control over.</p><p>If you encounter similar symptoms to this but you aren&#39;t using Steam to launch Cemu, please refer to <a href="#a-lot-of-objects-or-other-assets-aren-t-appearing">this section below</a>.</p><p>Otherwise, beyond problems with Async Shader Compile, you may also experience some controller difficulties as Steam enforces their own drivers; this may prevent Cemu from working as expected with your device.</p><h3 id="problems-with-vulkan-within-cemu" tabindex="-1"><a class="header-anchor" href="#problems-with-vulkan-within-cemu" aria-hidden="true">#</a> Problems with Vulkan within Cemu</h3><p>Such problems include:</p><ul><li>When I try to open General Settings, Cemu crashes.</li><li>There is no Vulkan option even though my GPU should have Vulkan Support.</li><li>I have a Vulkan option but my GPU doesn&#39;t show up in the dropdown.</li><li>When I select the Vulkan option in the dropdown menu, Cemu crashes.</li><li>When I try to launch a game that&#39;s supposed to work with Vulkan, it immediately crashes.</li></ul><p>If you experience any of the above symptoms, please do the following:</p>',12),I=e("li",null,"Ensure Cemu is fully up-to-date; issues with older Cemu versions will not be available for troubleshooting support.",-1),U={href:"https://vulkan.gpuinfo.org/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://www.khronos.org/conformance/adopters/conformant-products#vulkan",target:"_blank",rel:"noopener noreferrer"},T={href:"https://en.wikipedia.org/wiki/Vulkan_(API)#Hardware",target:"_blank",rel:"noopener noreferrer"},G={href:"https://developer.nvidia.com/vulkan-driver",target:"_blank",rel:"noopener noreferrer"},L={href:"https://www.amd.com/en/technologies/vulkan",target:"_blank",rel:"noopener noreferrer"},W={href:"https://www.intel.com/content/www/us/en/support/articles/000005524/graphics.html",target:"_blank",rel:"noopener noreferrer"},A=e("li",null,"If you've confirmed your support and yet it still fails, please reinstall both your iGPU/APU & dGPU drivers with DDU:",-1),V={href:"https://www.wagnardsoft.com/content/ddu-guide-tutorial",target:"_blank",rel:"noopener noreferrer"},F=r('<p>Yes, you must install both the iGPU/APU and dGPU drivers; skipping one will likely cause the issue to not be resolved.</p><p>If this fails to help then it&#39;s time to see what our Discord Server has to say; you may also try downgrading your GPU driver to an earlier version. Please do some research on the subject to see if any other people with your GPU have had issues with Vulkan in other games (not specifically Cemu.)</p><h3 id="crashing-with-file-load-or-install-game-title-update-or-dlc" tabindex="-1"><a class="header-anchor" href="#crashing-with-file-load-or-install-game-title-update-or-dlc" aria-hidden="true">#</a> Crashing with <code>[File] -&gt; [Load]</code> or <code>[Install Game Title, Update, or DLC]</code></h3><p>This refers to when the Window&#39;s File Explorer window is supposed to pop up. This is a longstanding issue that&#39;s caused by either:</p><ol><li>Incompatibility with a 3rd party program installed on your PC, usually one that edits how Windows visually looks or those that edit the Taskbar/Tray.</li><li>If your PC supports Intel Optane / RST, you must keep the drivers and features for it installed. Not having the software available can cause this issue; if you removed them or never installed them, it is encouraged for you to do so, but only if your motherboard supports this feature and you get this type of crash.</li><li>A broken or semi-corrupt Windows installation.</li></ol><p>We encourage you to try and find the afflicting program and remove it, otherwise you should consider installing the latest version of Windows 10, cleanly. Migrations, in-place upgrades, &quot;refresh&quot; and any other non-clean installation methods can result in the problem migrating with you to your newer installation. If you are not sure of how to do a clean Windows reinstallation, we suggest you follow a tutorial. Please be smart and back-up any files, settings, and programs / program names / product keys that you want to transfer beforehand.</p><h2 id="the-legend-of-zelda-breath-of-the-wild" tabindex="-1"><a class="header-anchor" href="#the-legend-of-zelda-breath-of-the-wild" aria-hidden="true">#</a> The Legend of Zelda: Breath of the Wild</h2>',7),q={href:"https://wiki.cemu.info/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild",target:"_blank",rel:"noopener noreferrer"},O=e("p",null,"Please review the above link as it goes over nearly every problem that has been recorded to date! Most (but not all) of the common issues are listed below.",-1),E=e("h3",{id:"a-system-update-is-required-white-or-yellow-screen-after-open-your-eyes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#a-system-update-is-required-white-or-yellow-screen-after-open-your-eyes","aria-hidden":"true"},"#"),t(' "A System update is required" / White or Yellow Screen after "Open your eyes..."')],-1),M=r('<h3 id="game-is-stuck-at-around-20-30fps" tabindex="-1"><a class="header-anchor" href="#game-is-stuck-at-around-20-30fps" aria-hidden="true">#</a> Game is stuck at around 20~30FPS</h3><ol><li>Ensure you&#39;re running the latest game update and Cemu version.</li><li>Ensure FPS++ is enabled and set to above 30 or you will be locked into this state.</li><li>Make sure your hardware is supposed to be able to exceed 30FPS, try going into a Shrine.</li><li>Try disabling Vsync temporarily and see if this changes the behavior.</li></ol><h3 id="game-feels-like-it-s-playing-in-slowmotion-or-fastforward" tabindex="-1"><a class="header-anchor" href="#game-feels-like-it-s-playing-in-slowmotion-or-fastforward" aria-hidden="true">#</a> Game feels like it&#39;s playing in Slowmotion or Fastforward</h3><ol><li>This will occur if you do not have the game fully updated and you haphazardly enable FPS++</li><li>On occasion FPS++ will incorrectly apply after starting the game. Restarting Cemu usually resolves this.</li><li>Do not use FPS++&#39;s <code>Static Mode (Enabled)</code> instead of <code>Disabled (Default, Dynamic)</code>; <code>Static Mode</code> will cause this behavior.</li><li>Changing the <code>Frame Average</code> to a higher value instead of using the default value <code>8</code> can also cause this issue.</li></ol><h3 id="cutscenes-cause-the-game-to-freeze-softlock" tabindex="-1"><a class="header-anchor" href="#cutscenes-cause-the-game-to-freeze-softlock" aria-hidden="true">#</a> Cutscenes cause the game to freeze / softlock</h3><p>This can be caused by setting the framerate above 60FPS. If it still occurs at 60FPS, then set it to 30FPS or disable FPS++ temporarily, then change the setting back after the cutscene has finished, save, and then restart Cemu. Alternatively you may try using OpenGL instead of Vulkan.</p><p>If disabling FPS++ and using OpenGL doesn&#39;t resolve this, this is a sign that your game&#39;s data is corrupt and needs replaced. You should replace the Update and DLC as well.</p><h3 id="invisible-water-in-the-air" tabindex="-1"><a class="header-anchor" href="#invisible-water-in-the-air" aria-hidden="true">#</a> Invisible water in the air</h3><p>This is an infrequent issue on Vulkan, a simple Cemu restart should resolve the invisible water. This may be fixed in the future. Contrary to popular belief, this has nothing to do with Async Shader Compile.</p><h3 id="a-lot-of-objects-or-other-assets-aren-t-appearing" tabindex="-1"><a class="header-anchor" href="#a-lot-of-objects-or-other-assets-aren-t-appearing" aria-hidden="true">#</a> A lot of objects or other assets aren&#39;t appearing</h3><p>It&#39;s recommended that if you use Steam to launch Cemu that you refer to this: <a href="#i-use-steam-to-launch-cemu-what-can-happen">Click Here</a></p><ol><li>Disable any 3rd party mods if you downloaded and installed any, then test the game.</li><li>Disable the Extended Memory and Draw Distance GraphicPacks, then test the game.</li><li>Test FPS++&#39;s <code>Advanced Settings</code>&#39;s <code>Fence Method</code> set to <code>Accurate</code> instead of <code>Performance</code></li></ol><p>If none of these helped, this is a sign that your game&#39;s data is corrupt and needs replaced. You should replace the Update and DLC as well.</p><h3 id="i-get-a-white-or-black-screen-when-a-cutscene-is-supposed-to-start" tabindex="-1"><a class="header-anchor" href="#i-get-a-white-or-black-screen-when-a-cutscene-is-supposed-to-start" aria-hidden="true">#</a> I get a white or black screen when a cutscene is supposed to start</h3><p>This is a sign that your game&#39;s data is corrupt and needs replaced. You should replace the Update and DLC as well.</p><h3 id="i-get-a-green-screen-when-a-cutscene-is-supposed-to-start" tabindex="-1"><a class="header-anchor" href="#i-get-a-green-screen-when-a-cutscene-is-supposed-to-start" aria-hidden="true">#</a> I get a green screen when a cutscene is supposed to start</h3><p>This should only affect Linux users for now. You must have Cemuhook installed and correctly hooked into Cemu and have the <code>Debug</code> -&gt; <code>Use Cemuhook H264</code> option enabled. If you do not know how to do this, visit the #Linux channel on the Cemu Discord server for assistance. This should no longer be required after Cemu&#39;s H264 support is updated / after Cemu gets a native Linux build.</p><p>If you are also getting this behavior on Windows, try using <code>Debug</code> -&gt; <code>Use Cemuhook H264</code>. If you are already using this option and you are an older Intel iGPU user, try disabling <code>Use Cemuhook H264</code> instead. Otherwise you may request assistance on our Discord Server.</p><h2 id="other-miscellaneous-issues-with-any-game-on-cemu" tabindex="-1"><a class="header-anchor" href="#other-miscellaneous-issues-with-any-game-on-cemu" aria-hidden="true">#</a> Other miscellaneous issues with any game on Cemu</h2>',19),z={href:"http://compat.cemu.info/",target:"_blank",rel:"noopener noreferrer"},B=e("p",null,[t("If what you're having problems with is not listed there, please "),e("a",{href:"#problems-with-vulkan-within-cemu"},"make sure that your GPU supports Vulkan 1.1 or OpenGL 4.5"),t("; if it doesn't you will not have full support, which will result in a multitude of game-breaking bugs that you cannot fix.")],-1),H=e("p",null,"If you do have confirmed support, the safest bet is to:",-1),N=e("li",null,"Disable all 3rd-party game mods and test the result; many mods cause problems.",-1),j=e("li",null,"Disable all graphicPacks (excluding FPS++) and then see if the issue stops.",-1),Y=e("li",null,"Try renaming your shaderCache folder to see if it's the cause of the problem. If the shaderCache isn't the culprit, you can rename your shaderCache folder back to its original name in order to resume using it after a Cemu restart.",-1),K=e("p",null,"You may always visit us on our Discord to see if we can figure out the problem together.",-1);function R(Z,J){const o=n("ExternalLinkIcon"),s=n("router-link"),l=n("RouterLink");return d(),u("div",null,[p,e("p",null,[t("The first step is to ensure the game you are wanting to play has been deemed playable, as many games are either: not yet supported, are only known to boot but simply crash, or they have regressions in compatibility due to Cemu updates or issues with new GPU drivers. Before asking for any help, please check the "),e("a",m,[t("Game Compatibility List"),a(o)]),t(" and subsequent Wiki entries, just be aware of outdated testing results.")]),g,e("p",null,[t("Accidentally loading an Update or DLC as a game by using "),y,t(" -> "),f,t(" can cause this. Alternatively if you accidentally merged the Update or DLC data into the Base Game trying to save space, this will break the Base Game - all of the game's data will need to be "),a(s,{to:"/dumping-games"},{default:i(()=>[t("redumped")]),_:1}),t(" from your Wii U and replaced. Ensure you're launching the game correctly or otherwise that Update and DLC data are being installed "),a(s,{to:"/installing-games/#games-updates-and-dlc"},{default:i(()=>[t("properly")]),_:1}),t(".")]),w,e("p",null,[t("To continue off of Cause #3, this could be caused by an incomplete or otherwise corrupt dump of your Base Game / Update / DLC copy. Sometimes dumping software just doesn't work the way it's intended to, but it's better than not having it available. Try "),a(s,{to:"/dumping-games"},{default:i(()=>[t("redumping")]),_:1}),t(" the data from your Wii U again - reinstalling any game data will not affect your saves.")]),b,e("p",null,[t("Illicitly obtained game data will also cause this to happen. "),a(s,{to:"/dumping-games"},{default:i(()=>[t("Dumping")]),_:1}),t(" your game data is the only method that Cemu provides support for. Asking for help with illegally downloaded data will result in an immediate ban or warning.")]),k,e("p",null,[t("If you followed this guide you should not be dealing with this type of problem. "),e("a",_,[t("dumpling"),a(o)]),t(" will dump your games in a decrypted format and does not require you to have Encryption Keys or have you mess with keys.txt - if you used the wrong homebrew to dump the game software, please go back and use dumpling instead.")]),v,e("ul",null,[e("li",null,[e("a",C,[t("Obtaining your Wii U Common Key and Encryption Keys for your keys.txt"),a(o)])])]),x,e("p",null,[t("Pre-compiled shader and pipeline caches are available at "),e("a",P,[t("chriztr.github.io/cemu_shader_and_pipeline_caches"),a(o)]),t(", however not all games are supported. Follow "),a(l,{to:"/optimizing-cemu.html#importing-shader-caches-1"},{default:i(()=>[t("Optimizing Cemu")]),_:1}),t(" for more information on importing shader and pipeline caches.")]),S,e("ol",null,[I,e("li",null,[t("Verify that your GPU supports Vulkan 1.1 or newer and is up-to-date with Nvidia/AMD/Intel's latest driver version. "),e("ul",null,[e("li",null,[t("Multi-vendor Lists: "),e("a",U,[t("Here"),a(o)]),t(", "),e("a",D,[t("here"),a(o)]),t(", & "),e("a",T,[t("here"),a(o)])]),e("li",null,[t("Nvidia GPU Support: "),e("a",G,[t("Here"),a(o)])]),e("li",null,[t("AMD GPU Support: "),e("a",L,[t("Here"),a(o)])]),e("li",null,[t("Intel GPU Support: "),e("a",W,[t("Here"),a(o)])])])]),A]),e("p",null,[e("a",V,[t("DDU - Display Driver Uninstaller Guide"),a(o)])]),F,e("p",null,[e("a",q,[t("Full Cemu Wiki listing of issues"),a(o)])]),O,E,e("p",null,[t("This is caused by the game's latest update not being installed. Breath of the Wild must be using the latest update to work properly. Follow our "),a(s,{to:"/dumping-games"},{default:i(()=>[t("dumping guide")]),_:1}),t(" to rip and then install the latest game update on Cemu, make sure the game is updated on your Wii U console before proceeding.")]),M,e("p",null,[t("Emulation isn't a perfect science and new or old problems can surface, or ones that don't match other descriptions. If you do encounter something that isn't listed here, check the "),e("a",z,[t("Game Compatibility List"),a(o)]),t(" as each game has its own wiki entry.")]),B,H,e("ol",null,[N,j,Y,e("li",null,[t("Unfortunately not all issues are repairable; you should always try to "),a(s,{to:"/dumping-games"},{default:i(()=>[t("fully redump the game, update, and DLC")]),_:1}),t(" from your Wii U console.")])]),K])}const X=h(c,[["render",R],["__file","troubleshooting.html.vue"]]);export{X as default};
