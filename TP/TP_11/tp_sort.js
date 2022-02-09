// var boules_de_feu -= 40
// var trait_de_glace -= 35
// var chaine_d_eclair -= 25
// var sort = prompt("choisis ton sort!")
// Pour ce petit tp vous allez créer votre propre erreur à l’aide de « throw new Error() »
// - Créez un programme qui demande à l’utilisateur de choisir entre 3 sorts (boule
// de feu – trait de glace et chaine d’éclair).
// - boule de feu = 40 dégats, trait de glace = 35 dégats et chaine d’éclair = 25 dégat.
// - Si l’utilisateur choisis l’un de ses trois sorts, une alerte apparait disant que vous
// avez choisis le « nom du sort » qui fait les dégats annoncé ci-desus.
// - Si l’utilisateur choisis un sort autre que les trois ci-dessus, vous créez une erreur
// et l’affichez.
// « Switch case » vous sera utile pour cette exercice.
// throw new Error("Les autres sorts ne sont pas de votre niveau")


var sort = prompt("choisis ton sort!")
var boules_de_feu = 40
var trait_de_glace = 35
var chaine_d_eclair = 25

try{
switch (sort.toLowerCase()) {
          
          case "boules de feu":
              alert('tu écopes 40 dégats' + boules_de_feu);
              break;
          case "trait de glace":
              alert('tu écopes 35 dégats' + trait_de_glace);
              break;
          case "chaine d'éclair":
              alert('tu écopes 35 dégats' + chaine_d_eclair);
            break;
          default:
            throw new Error("Les autres sorts ne sont pas de votre niveau")
        }

    }
catch{}


