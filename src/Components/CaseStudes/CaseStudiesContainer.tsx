import React, { useState } from "react";
import { caseStudies } from "./caseStudiesConstants";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import "tailwindcss/tailwind.css";
// import watchnowicon from "../../assets/youtubeWatchNow.jpg";
import watchnowicon from "../../assets/watchnow.jpeg";
import CloseIcon from "@mui/icons-material/Close";

const CaseStudiesContainer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedGeo, setSelectedGeo] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  const itemsPerPage = 15;

  const filteredCaseStudies = caseStudies.filter((caseStudy) => {
    return (
      caseStudy.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      caseStudy.heading.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedService ? caseStudy.service === selectedService : true) &&
      (selectedIndustry ? caseStudy.industry === selectedIndustry : true) &&
      (selectedGeo ? caseStudy.geo === selectedGeo : true)
    );
  });

  const indexOfLastCaseStudy = currentPage * itemsPerPage;
  const indexOfFirstCaseStudy = indexOfLastCaseStudy - itemsPerPage;
  const currentCaseStudies = filteredCaseStudies.slice(
    indexOfFirstCaseStudy,
    indexOfLastCaseStudy
  );

  const totalPages = Math.ceil(filteredCaseStudies.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleClickOpen = (id: string) => {
    setVideoId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setVideoId("");
  };

  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/3"
        />
        <FormControl variant="outlined" className="w-full md:w-1/5">
          <InputLabel>Service</InputLabel>
          <Select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value as string)}
            label="Service"
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            {[...new Set(caseStudies.map((cs) => cs.service))].map(
              (service) => (
                <MenuItem key={service} value={service}>
                  {service}
                </MenuItem>
              )
            )}
          </Select>
        </FormControl>
        <FormControl variant="outlined" className="w-full md:w-1/5">
          <InputLabel>Industry</InputLabel>
          <Select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value as string)}
            label="Industry"
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            {[...new Set(caseStudies.map((cs) => cs.industry))].map(
              (industry) => (
                <MenuItem key={industry} value={industry}>
                  {industry}
                </MenuItem>
              )
            )}
          </Select>
        </FormControl>
        <FormControl variant="outlined" className="w-full md:w-1/5">
          <InputLabel>Geo</InputLabel>
          <Select
            value={selectedGeo}
            onChange={(e) => setSelectedGeo(e.target.value as string)}
            label="Geo"
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            {[...new Set(caseStudies.map((cs) => cs.geo))].map((geo) => (
              <MenuItem key={geo} value={geo}>
                {geo}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCaseStudies.map((caseStudy, index) => (
          <Box
            key={index}
            className="relative p-4 border border-gray-300 rounded-lg shadow-lg bg-white flex flex-col transform transition-all duration-300 hover:bg-blue-50 hover:scale-105"
          >
            <img
              src={caseStudy.image}
              alt={`Case Study ${index + 1}`}
              className="w-full h-48 object-cover mb-4 rounded-lg transition-transform duration-300 transform hover:scale-105"
            />
            <br></br>
            <Typography
              variant="h6"
              className="font-bold mb-8 text-black uppercase"
            >
              {caseStudy.heading}
            </Typography>
            <br></br>
            <Typography variant="h6" className="font-bold mb-8 text-primary">
              {caseStudy.title}
            </Typography>
            <br></br>
            <Typography variant="body1" className="text-gray-700 mb-2">
              {caseStudy.subtitle}
            </Typography>
            <div className="mt-auto flex items-center justify-between text-blue-600 cursor-pointer">
              <Typography variant="body1" className="text-primary mr-2">
                Read More <i className="fas fa-arrow-right"></i>
              </Typography>
              <img
                src={watchnowicon}
                alt="Watch Now"
                className="w-24 h-24 object-contain cursor-pointer"
                onClick={() => handleClickOpen(caseStudy.videoId)}
              />
            </div>
          </Box>
        ))}
      </div>
      <div className="flex justify-center items-center mt-8 space-x-4">
        <Button
          variant="contained"
          color="primary"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Typography variant="body1">
          Page {currentPage} of {totalPages}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="video-dialog-title"
        maxWidth="md"
        fullWidth
      >
        <DialogTitle id="video-dialog-title">
          Watch Video
          <IconButton
            aria-label="close"
            onClick={handleClose}
            className="absolute right-2 top-2"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <div className="relative" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CaseStudiesContainer;
