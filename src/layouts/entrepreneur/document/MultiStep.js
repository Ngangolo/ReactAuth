import React,{ useState, useEffect} from 'react'
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EntrepreneurLayout from '../EntrepreneurLayout';
import {useNavigate } from "react-router-dom";
import http from '../../../http-common';
import axios from "axios";



const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Informations de l'entreprise",
    "Informations salarié",
    "Autres Informations",
    "Terminer",
  ];
}



const MultiStep = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(activeStep === steps.length){
      createContractAction();
    }
})

  const [nomsociete, setNomsociete] = useState("")
  const [formju, setFormju] = useState("")
  const [capitalsoc, setCapitalsoc] = useState("")
  const [siege, setSiege] = useState("")
  const [ville, setVille] = useState("")
  const [numero, setNumero] = useState("")
  const [nomrep, setNomrep] = useState("")


  const [nomsal, setNomsal] = useState("")
  const [prenomsal, setPrenomsal] = useState("")
  const [natsal, setNatsal] = useState("")
  const [datenaiss, setDatenaiss] = useState("")
  const [lieunaiss, setLieunaiss] = useState("")
  const [address, setAddress] = useState("")
  const [secsoc, setSecsoc] = useState("")

  
  const [nomconv, setNomconv] = useState("")
  const [datedeb, setDatedeb] = useState("")
  const [datefin, setDatefin] = useState("")
  const [dure, setDure] = useState("")


  const [postsal, setPostsal] = useState("")
  const [missionsal, setMissionsal] = useState("")
  const [salbrut, setSalbrut] = useState("")

  // const [isSubmitting, setIsSubmitting] = useState(false);


const createContractAction = () => {
  let contrat = {
    nomsociete: nomsociete,
    formju:formju,
    capitalsoc: capitalsoc,
    siege:siege,
    ville: ville,
    numero:numero,
    nomrep: nomrep,
    nomsal:nomsal,
    prenomsal: prenomsal,
    natsal:natsal,
    datenaiss: datenaiss,
    lieunaiss:lieunaiss,
    address: address,
    secsoc:secsoc,
    nomconv: nomconv,
    datedeb:datedeb,
    datefin: datefin,
    dure:dure,
    postsal: postsal,
    missionsal:missionsal,
    salbrut: salbrut,
}
    http.post('/createContrat', contrat)
    .then((r) => {
      if (r.data.status === 200) {
   //  setIsSubmitting(false)
   console.warn(r.data);
   // localStorage.setItem('data',r.data);
   navigate("/documentListe");    }
     
    })
    .catch((e) => {
       // setIsSubmitting(false)
        if (e.response.data !== undefined) {
          //  setValidationErrors(e.response.data.errors);
        }
    });


};

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };
  const getStepContent =(step) =>{
    switch (step) {
      case 0:
        return (
         
          <>
            <TextField
              id="nomsociete"
              // label="Nom Societe"
              variant="outlined"
              placeholder="Entrer le nom de la société"
              fullWidth
              margin="normal"
              name="nomsociete"
              value={nomsociete}
              onChange={(e)=>{setNomsociete(e.target.value)}}
            />
            <TextField
              id="formju"
              // label="Form juridique"
              variant="outlined"
              placeholder="Enter la forme juridique"
              fullWidth
              margin="normal"
              name="formju"
              value={formju}
              onChange={(e)=>{setFormju(e.target.value)}}
            />
            <TextField
              id="capitalsoc"
              // label="Capital Social"
              variant="outlined"
              placeholder="Enter le  capital social"
              fullWidth
              margin="normal"
              name="capitalsoc"
              value={capitalsoc}
              onChange={(e)=>{setCapitalsoc(e.target.value)}}
            />
             <TextField
              id="siege"
              // label="Capital Social"
              variant="outlined"
              placeholder="Enter le  siege social"
              fullWidth
              margin="normal"
              name="siege" 
              value={siege}
              onChange={(e)=>{setSiege(e.target.value)}}

            />
              <TextField
              id="ville"
              // label="Capital Social"
              variant="outlined"
              placeholder="Enter la Ville d’immatriculation"
              fullWidth
              margin="normal"
              name="ville" 
              value={ville}
              onChange={(e)=>{setVille(e.target.value)}}
            />
               <TextField
              id="numero"
              // label="Capital Social"
              variant="outlined"
              placeholder="Enter le  Numéro SIREN"
              fullWidth
              margin="normal"
              name="numero" 
              value={numero}
              onChange={(e)=>{setNumero(e.target.value)}}
            />
               <TextField
              id="nomrep"
              // label="Capital Social"
              variant="outlined"
              placeholder="Enter le nom du Représentant légal de l'entreprise"
              fullWidth
              margin="normal"
              name="nomrep" 
              value={nomrep}
              onChange={(e)=>{setNomrep(e.target.value)}}
            />
            
          </>
        );
  
      case 1:
        return (
          <>
            <TextField
              id="nomsal"
            //  label="nomsal"
              variant="outlined"
              placeholder="Entrer le Nom du salarié"
              fullWidth
              margin="normal"
              name="nomsal"
              value={nomsal}
              onChange={(e)=>{setNomsal(e.target.value)}}
            />
            <TextField
              id="prenomsal"
              // label="prenomsal"
              variant="outlined"
              placeholder="Entrer le Prenom du salarié"
              fullWidth
              margin="normal"
              name="prenomsal"
              value={prenomsal}
              onChange={(e)=>{setPrenomsal(e.target.value)}}
            />
            <TextField
              id="natsal"
              // label="natsal"
              variant="outlined"
              placeholder="Entrer la Nationalité du salarié"
              fullWidth
              margin="normal"
              name="natsal"
              value={natsal}
              onChange={(e)=>{setNatsal(e.target.value)}}
            />
              <TextField
              id="datenaiss"
              // label="natsal"
              variant="outlined"
              placeholder="Entrer la Date de naissance du salarié"
              fullWidth
              margin="normal"
              name="datenaiss"
              value={datenaiss}
              onChange={(e)=>{setDatenaiss(e.target.value)}}
            />
              <TextField
              id="lieunaiss"
              // label="natsal"
              variant="outlined"
              placeholder="Entrer le lieu de naissance  du salarié"
              fullWidth
              margin="normal"
              name="lieunaiss"
              value={lieunaiss}
              onChange={(e)=>{setLieunaiss(e.target.value)}}
            />
              <TextField
              id="address"
              // label="natsal"
              variant="outlined"
              placeholder="Entrer l'addresse du salarié"
              fullWidth
              margin="normal"
              name="address"
              value={address}
              onChange={(e)=>{setAddress(e.target.value)}}
            />
              <TextField
              id="secsoc"
              // label="natsal"
              variant="outlined"
              placeholder="Entrer le Numéro de sécurité sociale du salarié"
              fullWidth
              margin="normal"
              name="secsoc"
              value={secsoc}
              onChange={(e)=>{setSecsoc(e.target.value)}}
            />
          </>
        );
      case 2:
        return (
          <>
            <TextField
              id="nomconv"
              // label="Address 1"
              variant="outlined"
              placeholder="Entrer Nom de la convention collective"
              fullWidth
              margin="normal"
              name="nomconv"
              value={nomconv}
              onChange={(e)=>{setNomconv(e.target.value)}}
            />
            <TextField
              id="datedeb"
              // label="Address 2"
              variant="outlined"
              placeholder="entrer la Date de début du contrat"
              fullWidth
              margin="normal"
              name="datedeb"
              value={datedeb}
              onChange={(e)=>{setDatedeb(e.target.value)}}
            />
            <TextField
              id="datefin"
              // label="Country"
              variant="outlined"
              placeholder="entrer la Date de fin du contrat"
              fullWidth
              margin="normal"
              name="datefin"
              value={datefin}
              onChange={(e)=>{setDatefin(e.target.value)}}
            />
             <TextField
              id="dure"
              // label="Country"
              variant="outlined"
              placeholder="entrer la duré du contrat"
              fullWidth
              margin="normal"
              name="dure"
              value={dure}
              onChange={(e)=>{setDure(e.target.value)}}
            />
          </>
        );
      case 3:
        return (
          <>
            <TextField
              id="postsal"
              // label="Card Number"
              variant="outlined"
              placeholder="Entrer le post du salarié"
              fullWidth
              margin="normal"
              name="postsal"
              value={postsal}
              onChange={(e)=>{setPostsal(e.target.value)}}
            />
            <TextField
              id="missionsal"
              // label="Card Month"
              variant="outlined"
              placeholder="Entrer la mission du salarié"
              fullWidth
              margin="normal"
              name="missionsal"
              value={missionsal}
              onChange={(e)=>{setMissionsal(e.target.value)}}
            />
            <TextField
              id="salbrut"
              // label="Card Year"
              variant="outlined"
              placeholder="Entrer le Salaire mensuel brut du salarié"
              fullWidth
              margin="normal"
              name="salbrut" 
              value={salbrut}
              onChange={(e)=>{setSalbrut(e.target.value)}}
            />
          </>
       
        );
      default:
        return "unknown step";
    }
  }

  return (
    <EntrepreneurLayout>
    <div className="content-wrapper">
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Contrat creer avec succes!!
        </Typography>
      ) : (
        <>
          <form>{getStepContent(activeStep)}</form>
          <Button
            className={classes.button}
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Retour
          </Button>
          {isStepOptional(activeStep) && (
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleSkip}
            >
              remplir plus tart
            </Button>
          )}
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleNext} 
          >
            {activeStep === steps.length - 1 ? "Terminer" : "Suivant"}
          </Button>
          {/* {activeStep === steps.length ? creteContractAction : ''} */}
        </>
      )}
    </div>
    </EntrepreneurLayout>
  );
};

export default MultiStep;