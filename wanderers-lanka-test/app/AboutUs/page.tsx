"use client";

import React from "react";
import ResponsiveNav from "../../components/Home/Navbar/ResponsiveNav";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PublicIcon from "@mui/icons-material/Public";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import VerifiedIcon from "@mui/icons-material/Verified";
import CompostIcon from '@mui/icons-material/Compost';

const teamMembers = [
  {
    name: "Jane Smith",
    position: "Co-Founder",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    bio: "Driven by a passion for meaningful travel, she co-founded Wanderers Lanka Travels to create luxury Sri Lankan experiences built on trust, authenticity, and personalized service.",
  },
  {
    name: "Jhon Doe",
    position: "Travel Specialist",
    image:
       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    bio: "Specialized in tailor-made itineraries and luxury travel planning, ensuring every guest enjoys a seamless and unforgettable island journey.much experince in traveling",
  },
  {
    name: "Clark Kent",
    position: "Operations Team",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    bio: "Coordinates operations, transport, accommodations, and guest support to maintain premium service standards throughout every tour.",
  },
];

const trustItems = [
  {
    icon: <PublicIcon sx={{ color: "white" }} />,
    title: "Global Travelers",
    desc: "Welcoming guests from Europe, Canada, Australia, and Asia.",
  },
  {
    icon: <GroupsIcon sx={{ color: "white" }} />,
    title: "Personalized Service",
    desc: "Every journey is carefully designed around traveler preferences.",
  },
  {
    icon: <EmojiEventsIcon sx={{ color: "white" }} />,
    title: "Luxury Experiences",
    desc: "Premium travel experiences with elegance and comfort.",
  },
  {
    icon: <WorkspacePremiumIcon sx={{ color: "white" }} />,
    title: "Trusted Expertise",
    desc: "Professional planning with attention to detail and guest satisfaction.",
  },
];

const awards = [
  "Tripadvisor Travelers’ Choice Recognition",
  "Sri Lanka Tourism Industry Recognition",
  "Trusted Luxury Travel Partner",
  "Certified Tourism Service Standards",
];

export default function page() {
  return (
    <>
      <ResponsiveNav forceBg={true} />

      {/* HERO SECTION */}
      <Box
        sx={{
          mt: { xs: 9, md: 10 },
          minHeight: "65vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(rgba(5,15,25,0.78), rgba(5,15,25,0.78)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={7}>
              <Chip
                label="About Wanderers Lanka Travels"
                sx={{
                  backgroundColor: "#0E7C66",
                  color: "white",
                  mb: 3,
                  fontWeight: 600,
                  px: 1,
                  mt:5
                }}
              />

              <Typography
                variant="h2"
                sx={{
                  color: "white",
                  fontWeight: 800,
                  lineHeight: 1.2,
                  fontSize: { xs: "2.7rem", md: "4.5rem" },
                }}
              >
                Inspiring Journeys Across Sri Lanka
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  mt: 4,
                  lineHeight: 2,
                  fontSize: "1.05rem",
                  maxWidth: "700px",
                }}
              >
                Wanderers Lanka Travels was founded with a passion to create
                unforgettable travel experiences that combine luxury,
                authenticity, adventure, and meaningful cultural connections.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ mt: 5 ,mb:10}}
              >
                <Button
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(135deg, #0E7C66 0%, #0B253A 100%)",
                    px: 4,
                    py: 1.5,
                    borderRadius: "50px",
                    textTransform: "none",
                    fontWeight: 700,
                  }}
                >
                  Explore Tours
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    borderColor: "rgba(255,255,255,0.5)",
                    px: 4,
                    py: 1.5,
                    borderRadius: "50px",
                    textTransform: "none",
                    fontWeight: 700,
                  }}
                >
                  Contact Us
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* COMPANY INTRODUCTION */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          background:
            "linear-gradient(to bottom, #F8FAFC 0%, #EEF8F5 100%)",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography
                sx={{
                  color: "#0E7C66",
                  fontWeight: 700,
                  letterSpacing: 2,
                  mb: 2,
                }}
              >
                COMPANY INTRODUCTION
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  color: "#0B253A",
                  fontWeight: 800,
                  mb: 3,
                  lineHeight: 1.2,
                }}
              >
                Experience Sri Lanka Beyond Tourism
              </Typography>

              <Typography
                sx={{
                  color: "#64748B",
                  lineHeight: 2,
                  mb: 3,
                }}
              >
                Founded by three sisters from professional backgrounds in
                medicine, law, and business leadership, Wanderers Lanka Travels
                was created to offer a more personal, trustworthy, and
                experience-driven way to explore Sri Lanka.
              </Typography>

              <Typography
                sx={{
                  color: "#64748B",
                  lineHeight: 2,
                }}
              >
                We believe modern travel is no longer simply about visiting
                destinations it is about meaningful moments, emotional
                connections, authentic cultures, and unforgettable experiences.
              </Typography>
            </Grid>
           <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Grid item xs={12} md={5} sx={{ display:"flex", justifyContent:"center"}}>
              <Paper
                elevation={0}
                sx={{
                alignContent:"center",
                alignItems:"center",
                  p: 5,
                  borderRadius: "28px",
                  background:
                    "linear-gradient(135deg, #0B253A 0%, #0E7C66 100%)",
                  color: "white",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                  mx: "auto"
                
                }}
              >
                  <Stack spacing={2}>
                <Typography variant="h5" fontWeight={900} >
                  Company Overview
                </Typography>

              
                  <Typography>
                    <strong>Established:</strong> 2025
                  </Typography>

                  <Typography>
                    <strong>Business Type:</strong> Luxury Inbound Tourism
                    Company
                  </Typography>

                  <Typography>
                    <strong>Mission:</strong> Creating inspiring journeys and
                    lifelong memories.
                  </Typography>

                  <Typography>
                    <strong>Vision:</strong> To become one of Sri Lanka’s most
                    trusted luxury travel brands.
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
            </div>
          </Grid>
        </Container>
      </Box>

      {/* WHY TRUST US */}
      <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: "white" }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Typography
              sx={{
                color: "#0E7C66",
                fontWeight: 700,
                letterSpacing: 2,
                mb: 2,
              }}
            >
              WHY TRAVELERS TRUST US
            </Typography>

            <Typography
              variant="h3"
              sx={{
                color: "#0B253A",
                fontWeight: 800,
                mb: 3,
              }}
            >
              Luxury Travel With A Human Touch
            </Typography>

            <Typography
              sx={{
                color: "#64748B",
                lineHeight: 2,
                maxWidth: "750px",
                mx: "auto",
              }}
            >
              We combine professional expertise, local knowledge, and genuine
              Sri Lankan hospitality to create travel experiences built on
              trust, comfort, and unforgettable memories.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {trustItems.map((item, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: "20px",
                    p: 3,
                    height: "100%",
                    border: "1px solid #E2E8F0",
                    transition: "0.4s",
                    width:"100%",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                    },
                  }}
                >
                  <CardContent  md={8}>
                    <Box
                      sx={{
                        width: 65,
                        height: 65,
                        borderRadius: "18px",
                        background:
                          "linear-gradient(135deg, #0E7C66 0%, #0B253A 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 3,
                      }}
                    >
                      {item.icon}
                    </Box>

                    <Typography
                      variant="h6"
                      fontWeight={700}
                      color="#0B253A"
                      mb={2}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#64748B",
                        lineHeight: 1.8,
                       
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* TEAM SECTION */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          background:
            "linear-gradient(135deg, #07141F 0%, #0B253A 100%)",
        }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Typography
              sx={{
                color: "#34D399",
                fontWeight: 700,
                letterSpacing: 2,
                mb: 2,
              }}
            >
              MEET THE TEAM
            </Typography>

            <Typography
              variant="h3"
              sx={{
                color: "white",
                fontWeight: 800,
                mb: 3,
              }}
            >
              The People Behind The Journey
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.75)",
                lineHeight: 2,
                maxWidth: "750px",
               
                mb:4
              }}
            >
              Our passionate team combines local expertise, luxury hospitality,
              and personalized service to create unforgettable Sri Lankan travel
              experiences.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: "28px",
                    overflow: "hidden",
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(10px)",
                    color: "white",
                    transition: "0.4s",
                    "&:hover": {
                      transform: "translateY(-10px)",
                    },
                  }}
                >

 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
         height="200"
         image={member.image}
         alt={member.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {member.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {member.position}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {member.bio}
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small" sx={{borderRadius: "20px",color:"white", backgroundColor: "#0E7C66", padding:"10px 20px"}}>Learn More</Button>
      </CardActions>
    </Card>


                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* RESPONSIBLE TOURISM */}
      <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: "#F8FAFC" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={5}>
              <Typography
                sx={{
                  color: "#0E7C66",
                  fontWeight: 700,
                  letterSpacing: 2,
                  mb: 2,
                }}
              >
                RESPONSIBLE TOURISM
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  color: "#0B253A",
                  fontWeight: 800,
                  mb: 3,
                }}
              >
                Travel With Purpose
              </Typography>

              <Typography
                sx={{
                  color: "#64748B",
                  lineHeight: 2,
                }}
              >
                We believe sustainable tourism should protect nature, support
                communities, and create positive experiences for both travelers
                and local people.
              </Typography>
            </Grid>

            <Grid item xs={12} md={7}>
              <Stack spacing={3}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: "22px",
                    border: "1px solid #E2E8F0",
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    {/* <EcoIcon sx={{ color: "#0E7C66", fontSize: 35 }} /> */}
                    <CompostIcon sx={{ color: "#0E7C66", fontSize: 35 }} />

                    <Box>
                      <Typography variant="h6" fontWeight={700}>
                        Eco-Tourism
                      </Typography>

                      <Typography color="#64748B" sx={{ mt: 1 }}>
                        Supporting sustainable travel experiences and promoting
                        responsible environmental practices across Sri Lanka.
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>

                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: "22px",
                    border: "1px solid #E2E8F0",
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <VolunteerActivismIcon
                      sx={{ color: "#0E7C66", fontSize: 35 }}
                    />

                    <Box>
                      <Typography variant="h6" fontWeight={700}>
                        Community Support
                      </Typography>

                      <Typography color="#64748B" sx={{ mt: 1 }}>
                        Encouraging local community engagement and supporting
                        authentic village experiences and local businesses.
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>

                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: "22px",
                    border: "1px solid #E2E8F0",
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <VerifiedIcon sx={{ color: "#0E7C66", fontSize: 35 }} />

                    <Box>
                      <Typography variant="h6" fontWeight={700}>
                        Ethical Tourism
                      </Typography>

                      <Typography color="#64748B" sx={{ mt: 1 }}>
                        Promoting respectful travel experiences that value local
                        culture, traditions, wildlife, and ethical hospitality.
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* AWARDS */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          background:
            "linear-gradient(135deg, #0B253A 0%, #0E7C66 100%)",
        }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Typography
              sx={{
                color: "#A7F3D0",
                fontWeight: 700,
                letterSpacing: 2,
                mb: 2,
              }}
            >
              AWARDS & RECOGNITION
            </Typography>

            <Typography
              variant="h3"
              sx={{
                color: "white",
                fontWeight: 800,
                mb: 3,
              }}
            >
              Trusted & Recognized
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {awards.map((award, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    textAlign: "center",
                    borderRadius: "24px",
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(10px)",
                    color: "white",
                    height: "100%",
                  }}
                >
                  <EmojiEventsIcon
                    sx={{
                      fontSize: 50,
                      color: "#FACC15",
                      mb: 2,
                    }}
                  />

                  <Typography
                    sx={{
                      lineHeight: 1.8,
                      fontWeight: 600,
                    }}
                  >
                    {award}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}