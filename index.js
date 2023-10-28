let nome = "Faantasy7"
let XP = "10002"
 
 switch (true)  {
    case XP <1000:
        console.log(nome + " está no nivel de ferro");
        break;
    case XP >=1001 && XP <2000:
        console.log(nome + " está no nivel de bronze");
        break;
    case XP >=2001 && XP < 5000:
        console.log(nome + " está no nivel de prata");
        break;
    case XP >=5001 && XP < 7000:
        console.log(nome + " está no nivel de ouro");   
        break;
    case XP >=7001 && XP < 8000:
        console.log(nome + " está no nivel de platina");
        break;
    case XP >=8001 && XP < 9000:
        console.log(nome + " está no nivel de ascendente");
        break;
    case XP >=9001 && XP < 10000:
        console.log(nome + " está no nível de imortal");
        break;
    case XP >=10001:
        console.log(nome + " está no nível de Radiante");
        break;
    default:
        console.log (nome + " tente novamente");
 }
