import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfumesListService {
  perfumes = [
    { id: '1', name: 'Resala' ,image:'https://www.arabianoud.com/wp-content/uploads/2017/12/15-1-480x480.jpg',
    descript:'Resalah is unique perfume sincere meanings fulfilled (message) new perfume and the concept surpassed beauty wonderful combination of rose petals and saffron mixed with a rich layer of wood lute based on aromatic of vanilla and chocolate base that set this fragrance your sense and shape of the stylish .. (Letter) given to the person who you love'},
    { id: '2', name: 'Madawi' ,image:'https://www.arabianoud.com/wp-content/uploads/2017/12/madawi-480x480.png',
    descript:'A Special fragrance inspired by the character of the contemporary , the pride of the ancient time including the aromatic bouquet of apple, peach, pineapple melted memories of last longing, with a base of roses and flowers, patchouli and musk, gives you the deep feeling of real satisfaction .'},
    { id: '3', name: 'Oriental Oud Spray',image:'https://www.arabianoud.com/wp-content/uploads/2017/12/oriental-oud-480x480.jpg' ,
    descript:'Oriental fragrance with a modern touch of royal saffron and bergamot for a personality that adores excellence. The mixture blends a rich layer of mature rose bouquets with a warm heart submerged in the luxurious oriental oud, mixed with appealing amber and pachole flavors to breathe the finest oriental blend balanced with lasting vitality and a heart full of ambition.'},
    { id: '4', name: 'Kalemat' ,image:'https://www.arabianoud.com/wp-content/uploads/2017/12/كلمات-1-480x480.png',
    descript:'It is a treasure to give as a present to commemorate beautiful memories.Kalemat by Arabian Oud is created from White musk and Honey leaves, we poured an odour touching dreamers thoughts to flow like poetry. Mixed with Cashmere wood, rosemary flower. will make you feel the glamorous and unique fragrance in a special way.this fragrance imparts a sensual aroma. Revitalize your senses with Kalemat fragrance by Arabian Oud that imparts notes that keep its subtlety intact. Also, the ambery note is enriched with the sweetness of honey.'},
    { id: '5', name: 'Bussma',image:'https://www.arabianoud.com/wp-content/uploads/2017/12/busmma-480x480.jpg',
    descript:'When you meet elegance and magnificence of the content, “Bussma” will spread your presence in all parts of the collection of the finest ingredients of saffron and fresh bergamot fruit with a luxurious blend of amber and flannel blossom to leave the mix with a rich base of musk and influenced by those around you “Bussma” He has his mark.' },
    { id: '6', name: 'Blue Oud',image:'https://www.arabianoud.com/wp-content/uploads/2017/12/10-1-480x480.jpg',
    descript:'A unique bundle of rare Indian Oud and blue musk scent to give you an exuding mix coming from years of experience enjoyed by Arabian Oud. To satisfy the tastes of our customers, this perfume comes in a luxury package containing two bottles: a 100 ml spray and a 24 ml oil.' },
    { id: '7', name: 'Arabian Legend Gold',image:'https://www.arabianoud.com/wp-content/uploads/2017/12/gold-legent-1-480x480.jpg',
    descript:'A legendary perfume with vast experience came with a blend worthy of being a legend to give you confidence in your perfume and crown you with the Arabian legend of perfumes from Arabian Oud. Arabian Oud’s Arabian Legend embraces you with its rich, oriental, and spicy aromas. The fragrance opens mandarin orange and saffron, leading to patchouli and rose. The basenotes represents a blend of amber and woody notes.' },
    { id: '8', name: 'Aseel',image:'https://www.arabianoud.com/wp-content/uploads/2017/12/7-480x480.jpg',
    descript:'From the bravery of the Arabian knight, we take the name of this Characteristic, add oud, mixed with roses and saffron, This mixture is obtained from its luxurious base with vanilla and wooden fragrance to produce this original perfume with all its qualities.' },
    { id: '9', name: 'Oil Perfumes',image:'https://www.arabianoud.com/wp-content/uploads/2017/12/5-1-480x480.jpg',
    descript:'Our oil perfumes are made in a special style for high taste lovers, mixing the best types of cedar wood oil to make one special perfume; adding Oud oil to give you confidence in your favorite perfume.' },
    
    ];
  constructor() { }

  get getPerfumes(){
    return this.perfumes;
  }

  getAllPerfumes(){
    return this.perfumes;
  }
  deletePerfume(id){
    this.perfumes = this.perfumes.filter(e => {
    
      return e.id !== id;
      
    }) ;
  }

  addPerfume(perfume){
    console.log(perfume);
    this.perfumes.push(perfume);
    console.log(this.perfumes);
  }

  returnPerfumesList() {
    return this.perfumes;
  }
}
