<template>
    <div class="tags-page">
        <ul>
            <li v-for="tag,index in Object.keys(tags)" :key="'t'+index">
                <router-link :to="{ path: `/tags/#${tag}`}" :class="['title-tags','color'+index]">{{tag}}</router-link>
            </li>
        </ul>

        <div v-for="tag,index in Object.keys(tags)" :key="'s'+index">
            <h2 :id="tag">
                <a href="#" class="header-anchor" aria-hidden="true">#</a>
                <i class="fas fa-tags"></i>
                {{tag}}
            </h2>

            <ul :style="{listStyle: 'none'}">
                <li v-for="page,index in tags[tag]" :key="'b'+index">
                    <router-link :to="{ path: page.path}" class="title-link">
                        <i class="far fa-file-alt"></i>
                        {{page.title}}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        tags() {
            let tags = {};
            for (let page of this.$site.pages) {
                for (let index in page.frontmatter.tags) {
                    const tag = page.frontmatter.tags[index];
                    if (tag in tags) {
                        tags[tag].push(page);
                    } else {
                        tags[tag] = [page];
                    }
                }
            }
            return tags;
        }
    }
};
</script>
<style lang="stylus" scoped>
.tags-page {
h2 {
    margin-top: -3.1rem;
    padding-top: 4.6rem;
    margin-bottom: 0;
  }

  li {
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    margin-right: 5px;
  }
}
i {
  font-size: 14px;
  margin-right: 3px;
}
*,
::after,
::before {
  box-sizing: border-box;
}
div {
  display: block;
}
.d-inline {
  display: inline-block !important;
}
.capture-image {
  display: block;
  margin: 10px auto 0;
  width: auto;
}
.title-tags {
  border-radius: 3px;
  padding: 0 4px;
  color: #fff;
  background: #42b983;
}

.color0 {
  background: #42b999;
}
.color1 {
  background: #3366cc;
}
.color2 {
  background: #dc3912;
}
.color3 {
  background: #ff9900;
}
.color4 {
  background: #109618;
}
.color5 {
  background: #990099;
}
.color6 {
  background: #0099c6;
}
.color7 {
  background: #dd4477;
}
.color8 {
  background: #66aa00;
}
.color9 {
  background: #b82e2e;
}
.color10 {
  background: #316395;
}
.color11 {
  background: #3366cc;
}
.color12 {
  background: #994499;
}
.color13 {
  background: #22aa99;
}
.color14 {
  background: #aaaa11;
}
.color15 {
  background: #6633cc;
}
.color16 {
  background: #e67300;
}
.color17 {
  background: #8b0707;
}
.color18 {
  background: #651067;
}
.color19 {
  background: #329262;
}
.color20 {
  background: #5574a6;
}
.color21 {
  background: #3b3eac;
}
.color22 {
  background: #b77322;
}
.color23 {
  background: #16d620;
}
.color24 {
  background: #b91383;
}
.color25 {
  background: #f4359e;
}
.color26 {
  background: #9c5935;
}
.color27 {
  background: #a9c413;
}
.color28 {
  background: #2a778d;
}
.color29 {
  background: #668d1c;
}
.color30 {
  background: #bea413;
}
.color31 {
  background: #0c5922;
}
.color32 {
  background: #743411;
}
.color33 {
  background: rgb(82, 82, 82);
}
.color34 {
  background: rgb(255, 0, 41);
}
.color35 {
  background: rgb(55, 126, 184);
}
.color36 {
  background: rgb(102, 166, 30);
}
.color37 {
  background: rgb(152, 78, 163);
}
.color38 {
  background: rgb(0, 210, 213);
}
.color39 {
  background: rgb(255, 127, 0);
}
.color40 {
  background: rgb(175, 141, 0);
}
.color41 {
  background: rgb(127, 128, 205);
}
.color42 {
  background: rgb(179, 233, 0);
}
.color43 {
  background: rgb(196, 46, 96);
}
.color44 {
  background: rgb(166, 86, 40);
}
.color45 {
  background: rgb(247, 129, 191);
}
.color46 {
  background: rgb(141, 211, 199);
}
.color47 {
  background: rgb(190, 186, 218);
}
.color48 {
  background: rgb(251, 128, 114);
}
.color49 {
  background: rgb(128, 177, 211);
}
.color50 {
  background: rgb(253, 180, 98);
}
.color51 {
  background: rgb(252, 205, 229);
}
.color52 {
  background: rgb(188, 128, 189);
}
.color53 {
  background: rgb(255, 237, 111);
}
.color54 {
  background: rgb(196, 234, 255);
}
.color55 {
  background: rgb(207, 140, 0);
}
.color56 {
  background: rgb(27, 158, 119);
}
.color57 {
  background: rgb(217, 95, 2);
}
.color58 {
  background: rgb(231, 41, 138);
}
.color59 {
  background: rgb(230, 171, 2);
}
.color61 {
  background: rgb(166, 118, 29);
}
.color62 {
  background: rgb(0, 151, 255);
}
.color63 {
  background: rgb(0, 208, 103);
}
.color64 {
  background: rgb(0, 0, 0);
}
.color65 {
  background: rgb(37, 37, 37);
}
.fa-facebook:hover {
  color: #3b5998;
}
.fa-twitter:hover {
  color: #00aced;
}
.fa-pinterest:hover {
  color: #cb2027;
}
.fa-linkedin:hover {
  color: #007bb6;
}
.fa-instagram:hover {
  color: #517fa4;
}
.fa-reddit:hover {
  color: #ff4500;
}
.fa-line:hover {
  color: #1dcd00;
}

</style>