import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public loading = false;
  public questionList = [{
    "id": 1,
    "theme": "Burger Quiz",
    "question": "Que veulent dire les chiffres au fond des verres de cantine ?",
    "proposals" : [
      {
        "id": 1,
        "text": "C’est l’âge que vous avez et le plus jeune va chercher l’eau."
      },
      {
        "id": 2,
        "text": "C’est la note que vous aurez à l’interro de cet après-midi."
      },
      {
        "id": 3,
        "text": "C’est le nombre de filles avec qui vous sortirez dans la vie."
      },
      {
        "id":4,
        "text": "On sait pas, ça reste un mystère mais on est tous sur le coup…"
      }
    ],
    "answer": 4,
    "chosenAnswer": 0
  },
  {
    "id": 2,
    "theme": "Burger Quiz",
    "question": "Si on avait persuadé Elvis Presley et Bob Marley de s'accoupler, on aurait pu obtenir :",
    "proposals" : [
      {
        "id": 1,
        "text": "Elvis Marley, le rasta king."
      },
      {
        "id": 2,
        "text": "Une baleine blanche avec des dreads."
      },
      {
        "id": 3,
        "text": "Des tubes comme « Spliff me tender » ou « Could you be cruel »"
      },
      {
        "id": 4,
        "text": "Oui mais alors on dit n’importe quoi et toutes les réponses sont possibles."
      }
    ],
    "answer": 4,
    "chosenAnswer": 0
  },
  {
    "id": 3,
    "theme": "Burger Quiz",
    "question": "Selon la légende, pourquoi la ligne ferroviaire Moscou - St Petersbourg fait-elle un détour de 17km ?",
    "proposals" : [
      {
        "id": 1,
        "text": "Parce que les ouvriers étaient bourrés."
      },
      {
        "id": 2,
        "text": "Parce que le froid a tordu les rails."
      },
      {
        "id": 3,
        "text": "Parce que le Tsar avait laissé un doigt dépasser de sa règle."
      },
      {
        "id": 4,
        "text": "Parce qu’avant il y avait un village qui a disparu depuis."
      }
    ],
    "answer": 3,
    "chosenAnswer": 0
  },
  {
    "id": 4,
    "theme": "Burger Quiz",
    "question": "Quel est le vice caché de Sherlock Holmes",
    "proposals" : [
      {
        "id": 1,
        "text": "Il est zoophile."
      },
      {
        "id": 2,
        "text": "Il est pigiste au Figaro."
      },
      {
        "id": 3,
        "text": "Il est cocaïnomane."
      },
      {
        "id": 4,
        "text": "Il mange ses crottes de nez."
      }
    ],
    "answer": 3,
    "chosenAnswer": 0
  },
  {
    "id": 5,
    "theme": "Burger Quiz",
    "question": "Quand la série \"Derrick\" s'est arrêtée, son scénariste avait :",
    "proposals" : [
      {
        "id": 1,
        "text": "74 ans."
      },
      {
        "id": 2,
        "text": "84 ans."
      },
      {
        "id": 3,
        "text": "94 ans."
      },
      {
        "id": 4,
        "text": "Honte."
      }
    ],
    "answer": 2,
    "chosenAnswer": 0
  },
  {
    "id": 6,
    "theme": "Burger Quiz",
    "question": "Quel sport pratique-t-on si on a un autocollant en forme de poing sur sa voiture ?",
    "proposals" : [
      {
        "id": 1,
        "text": "Le fist-fucking."
      },
      {
        "id": 2,
        "text": "La boxe anglaise."
      },
      {
        "id": 3,
        "text": "Le karaté."
      },
      {
        "id": 4,
        "text": "La boxe en voiture."
      }
    ],
    "answer": 3,
    "chosenAnswer": 0
  },
  {
    "id": 7,
    "theme": "Burger Quiz",
    "question": "Quel est le cri de l'aigle Milan ?",
    "proposals" : [
      {
        "id": 1,
        "text": "Il huit."
      },
      {
        "id": 2,
        "text": "Il neuf."
      },
      {
        "id": 3,
        "text": "Il dix."
      },
      {
        "id": 4,
        "text": "Il deux-cent-cinquante."
      }
    ],
    "answer": 1,
    "chosenAnswer": 0
  }]

  constructor() { }

  ngOnInit(): void {
    this.getQuestions()
  }

  public getQuestions() {
    // récupérer le tableau de questions et ajouter un champ "chosenAnswer" pour chaque question
  }

  public validate() {
    let goodAnswers: number = 0;
    this.questionList.forEach(question => {
      console.log('choix question ' + question.id + ' réponse ' + question.chosenAnswer)
      if (question.answer === question.chosenAnswer) goodAnswers++;
    })

    // envoi du résultat au serveur
    this.loading = true

  }

}
