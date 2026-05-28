"use client";

import { useMemo, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";

type LuxuryLevel = "Any" | "Standard" | "Premium" | "Ultra";
type DurationRange = "Any" | "1-3" | "4-7" | "8-14" | "15+";
type BudgetRange =
  | "Any"
  | "Under $800"
  | "$800–$1500"
  | "$1500–$3000"
  | "$3000+";

type Interest =
  | "Any"
  | "Adventure"
  | "Wildlife"
  | "Wellness"
  | "Culture"
  | "Beach"
  | "Romance"
  | "Family";

type TourCategory =
  | "Honeymoon Tours"
  | "Family Tours"
  | "Luxury Tours"
  | "Adventure Tours"
  | "Wildlife Tours"
  | "Wellness Tours"
  | "Last-Minute Tours";

type TourPackage = {
  id: string;
  name: string;
  durationDays: number;
  locations: string[];
  highlights: string[];
  startingPrice: number;
  luxury: Exclude<LuxuryLevel, "Any">;
  interests: Exclude<Interest, "Any">[];
  categories: TourCategory[];
  tag?: string;
};

const categories: TourCategory[] = [
  "Honeymoon Tours",
  "Family Tours",
  "Luxury Tours",
  "Adventure Tours",
  "Wildlife Tours",
  "Wellness Tours",
  "Last-Minute Tours",
];

const tours: TourPackage[] = [
  {
    id: "tp-saffron-sunsets",
    name: "Saffron Sunsets Escape",
    durationDays: 6,
    locations: ["Santorini", "Mykonos"],
    highlights: [
      "Clifftop dinner",
      "Private catamaran",
      "Blue-domed villages",
    ],
    startingPrice: 1890,
    luxury: "Premium",
    interests: ["Romance", "Beach", "Culture"],
    categories: ["Honeymoon Tours", "Luxury Tours"],
    tag: "Bestseller",
  },
  {
    id: "tp-rainforest-rapids",
    name: "Rainforest & Rapids Quest",
    durationDays: 8,
    locations: ["Arenal", "Monteverde", "Manuel Antonio"],
    highlights: [
      "Whitewater rafting",
      "Cloud forest hike",
      "Night wildlife walk",
    ],
    startingPrice: 1240,
    luxury: "Standard",
    interests: ["Adventure", "Wildlife"],
    categories: ["Adventure Tours", "Wildlife Tours"],
    tag: "Adventure Pick",
  },
  {
    id: "tp-safari-starlight",
    name: "Safari Under Starlight",
    durationDays: 10,
    locations: ["Serengeti", "Ngorongoro", "Zanzibar"],
    highlights: [
      "Big 5 game drives",
      "Crater sunrise",
      "Beach wind-down",
    ],
    startingPrice: 2980,
    luxury: "Premium",
    interests: ["Wildlife", "Beach", "Culture"],
    categories: ["Wildlife Tours", "Luxury Tours"],
    tag: "New",
  },
  {
    id: "tp-zen-trails",
    name: "Zen Trails Retreat",
    durationDays: 5,
    locations: ["Ubud", "Tegallalang"],
    highlights: [
      "Sound healing",
      "Rice terrace walk",
      "Farm-to-table wellness",
    ],
    startingPrice: 990,
    luxury: "Standard",
    interests: ["Wellness", "Culture"],
    categories: ["Wellness Tours"],
    tag: "Reset",
  },
];

function formatPriceUSD(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

function matchesDuration(range: DurationRange, days: number) {
  if (range === "Any") return true;
  if (range === "1-3") return days >= 1 && days <= 3;
  if (range === "4-7") return days >= 4 && days <= 7;
  if (range === "8-14") return days >= 8 && days <= 14;
  return days >= 15;
}

function matchesBudget(range: BudgetRange, price: number) {
  if (range === "Any") return true;
  if (range === "Under $800") return price < 800;
  if (range === "$800–$1500") return price >= 800 && price <= 1500;
  if (range === "$1500–$3000") return price > 1500 && price <= 3000;
  return price > 3000;
}

function luxuryRank(level: Exclude<LuxuryLevel, "Any">) {
  return level === "Standard" ? 1 : level === "Premium" ? 2 : 3;
}

export default function TourPackages() {
  const [duration, setDuration] = useState<DurationRange>("Any");
  const [budget, setBudget] = useState<BudgetRange>("Any");
  const [interest, setInterest] = useState<Interest>("Any");
  const [luxury, setLuxury] = useState<LuxuryLevel>("Any");
  const [activeCategory, setActiveCategory] = useState<TourCategory | "All">("All");

  const filtered = useMemo(() => {
    return tours
      .filter((t) => matchesDuration(duration, t.durationDays))
      .filter((t) => matchesBudget(budget, t.startingPrice))
      .filter((t) =>
        interest === "Any"
          ? true
          : t.interests.includes(interest as Exclude<Interest, "Any">)
      )
      .filter((t) => {
        if (luxury === "Any") return true;
        return luxuryRank(t.luxury) >= luxuryRank(luxury);
      })
      .filter((t) =>
        activeCategory === "All" ? true : t.categories.includes(activeCategory)
      );
  }, [duration, budget, interest, luxury, activeCategory]);

  const resetFilters = () => {
    setDuration("Any");
    setBudget("Any");
    setInterest("Any");
    setLuxury("Any");
    setActiveCategory("All");
  };

  return (
    <Box
      sx={{
        minwidth: "100vh",
        backgroundColor: "#ffffff", // Pure white background
        color: "#111827", // Dark gray for text readability
        py: 6,
        marginLeft: 0,
       
      }}
    >
<Container maxWidth="xl" disableGutters sx={{px:0,mx:0}}>
  {/* HERO SECTION */}

  <Box
    sx={{
      position: "relative",
      width: "100%",
      
    
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
     
    }}
  >
    {/* BACKGROUND IMAGE */}
    <Box
      component="img"
      src="/images/sigiriya.jpg"
      alt="Sigiriya"
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "200",
        objectFit: "cover",
        marginleft:0
      }}
    />

    {/* DARK OVERLAY */}
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.55)",
        zIndex: 1,
      }}
    />

    {/* CONTENT */}
    <Box
      sx={{
        position: "relative",
        zIndex: 2,
        width: "100%",
        px: { xs: 2, md: 6 },
        py: 10,
        color: "#fff",
      }}
    >
      <Box mb={7}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Chip
            label="Curated tours • Transparent pricing • Instant inquiry"
            size="medium"
            sx={{
              mb: 3,
              backgroundColor: "rgba(255,255,255,0.15)",
              color: "#fff",
              fontWeight: 500,
              backdropFilter: "blur(10px)",
            }}
          />
        </Box>

        <Typography
          variant="h3"
          component="h1"
          fontWeight={800}
          mt={2}
          align="center"
          sx={{
            color: "#fff",
          }}
        >
          Tour Packages that feel{" "}
          <Box
            component="span"
            sx={{
              color: "#4fc3f7",
            }}
          >
            tailor-made
          </Box>
        </Typography>

        <Typography
          align="center"
          sx={{
            color: "rgba(255,255,255,0.8)",
            mb: 5,
            fontSize: "1.1rem",
            mt: 4,
            maxWidth: "850px",
            mx: "auto",
          }}
        >
          Filter by duration, budget, interest, and luxury level then
          pick a package with the vibe you want.
        </Typography>

        {/* FILTERS */}
        <Grid container spacing={3} sx={{mb:4}}>
          <Grid item xs={12} sm={6} md={3}>
            <label> Duration</label>
            <FilterSelect
              label="Duration"
              value={duration}
              onChange={(v) => setDuration(v as DurationRange)}
              options={["Any", "1-3", "4-7", "8-14", "15+"]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3} >
            <label> Budget</label>
            <FilterSelect
              label="Budget"
              value={budget}
              onChange={(v) => setBudget(v as BudgetRange)}
              options={[
                "Any",
                "Under $800",
                "$800–$1500",
                "$1500–$3000",
                "$3000+",
              ]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <label> Interest</label>
            <FilterSelect
              label="Interest"
              value={interest}
              onChange={(v) => setInterest(v as Interest)}
              options={[
                "Any",
                "Adventure",
                "Wildlife",
                "Wellness",
                "Culture",
                "Beach",
                "Romance",
                "Family",
              ]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <label> Luxury Level</label>
            <FilterSelect
              label="Luxury Level"
              value={luxury}
              onChange={(v) => setLuxury(v as LuxuryLevel)}
              options={[
                "Any",
                "Standard",
                "Premium",
                "Ultra",
              ]}
            />
          </Grid>
        </Grid>

        {/* CATEGORY PILLS */}
        <Stack
          direction="row"
          spacing={1.5}
          mt={5}
          flexWrap="wrap"
          useFlexGap
          justifyContent="center"
        >
          <CategoryPill
            label="All Categories"
            active={activeCategory === "All"}
            onClick={() => setActiveCategory("All")}
          />

          {categories.map((category) => (
            <CategoryPill
              key={category}
              label={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  </Box>


        {/* HEADER */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={2}
          sx={{mt:4,mb:2}}
        >
          <Box >
            <Typography variant="h5" fontWeight={700}>
              Packages
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Showing {filtered.length} result(s)
            </Typography>
          </Box>

          <Button
            variant="outlined"
            onClick={resetFilters}
            sx={{
              color: "#1976d2", // Blue Outline
              borderColor: "#1976d2",
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "rgba(25, 118, 210, 0.04)",
                borderColor: "#1565c0",
              },
            }}
          >
            Reset Filters
          </Button>
        </Stack>
         



        {/* CARDS */}
        <Grid container spacing={4}>
          {filtered.map((tour) => (
            <Grid item xs={12} md={6} lg={4} key={tour.id}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb", // Light gray border
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    p: 3,
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    mb={2}
                  >
                    <Box>
                      <Typography variant="h6" fontWeight={700} color="#111827">
                        {tour.name}
                      </Typography>
                      <Typography variant="body2" color="#6b7280">
                        {tour.durationDays} days • {tour.locations.join(" → ")}
                      </Typography>
                    </Box>

                    {tour.tag && (
                      <Chip
                        label={tour.tag}
                        size="small"
                        sx={{
                          backgroundColor: "#fff0f6", // Very light pink/red for emphasis
                          color: "#9f1239",
                          fontWeight: 600,
                        }}
                      />
                    )}
                  </Stack>

                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap mb={3}>
                    <Chip
                      label={tour.luxury}
                      size="small"
                      sx={{
                        backgroundColor: "#e0f2fe", // Light Blue
                        color: "#0369a1", // Dark Blue
                        fontWeight: 500,
                      }}
                    />
                    {tour.interests.map((interest) => (
                      <Chip
                        key={interest}
                        label={interest}
                        size="small"
                        sx={{
                          backgroundColor: "#f3f4f6",
                          color: "#4b5563",
                        }}
                      />
                    ))}
                  </Stack>

                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: "#f8fafc", // Very light slate for contrast against white card
                      mb: 3,
                    }}
                  >
                    <Typography variant="subtitle2" fontWeight={600} mb={1} color="#374151">
                      Key Highlights
                    </Typography>
                    <Stack spacing={0.5}>
                      {tour.highlights.map((highlight) => (
                        <Typography
                          key={highlight}
                          variant="body2"
                          color="#4b5563"
                        >
                          • {highlight}
                        </Typography>
                      ))}
                    </Stack>
                  </Box>

                  <Box mt="auto">
                    <Typography variant="body2" color="#6b7280">
                      Starting from
                    </Typography>
                    <Stack direction="row" alignItems="baseline" spacing={0.5}>
                      <Typography variant="h5" fontWeight={800} color="#111827">
                        {formatPriceUSD(tour.startingPrice)}
                      </Typography>
                      <Typography variant="caption" color="#6b7280">
                        per person
                      </Typography>
                    </Stack>

                    <Button
                      fullWidth
                      variant="contained"
                      disableElevation
                      sx={{
                        mt: 3,
                        borderRadius: 2,
                        py: 1.2,
                        backgroundColor: "#2e7d32", // Primary Green Action Button
                        color: "#ffffff",
                        textTransform: "none",
                        fontWeight: 700,
                        fontSize: "1rem",
                        "&:hover": {
                          backgroundColor: "#1b5e20",
                        },
                      }}
                    >
                      View Details
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* EMPTY STATE */}
        {filtered.length === 0 && (
          <Box
            sx={{
              mt: 5,
              p: 6,
              borderRadius: 4,
              border: "1px dashed #cbd5e1",
              backgroundColor: "#f8fafc",
              textAlign: "center",
            }}
          >
            <Typography variant="h6" fontWeight={700} color="#1e293b">
              No packages found
            </Typography>
            <Typography mt={1} color="#64748b">
              Try adjusting your filters to find your perfect getaway.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}

// --- Subcomponents ---

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <FormControl fullWidth size="small">
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        label={label}
        onChange={(e) => onChange(e.target.value)}
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: 2,
          // Let MUI handle the default light theme borders and hover states
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

function CategoryPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <Button
      onClick={onClick}
      disableElevation
      sx={{
        borderRadius: 999,
        px: 3,
        py: 0.75,
        textTransform: "none",
        fontWeight: active ? 600 : 500,
        fontSize: "0.875rem",
        color: active ? "#0f52ba" : "#4b5563", // Blue text when active
        border: active ? "1px solid #bfdbfe" : "1px solid #e5e7eb",
        backgroundColor: active ? "#eff6ff" : "#ffffff", // Light blue bg when active
        "&:hover": {
          backgroundColor: active ? "#dbeafe" : "#f3f4f6",
        },
      }}
    >
      {label}
    </Button>
  );
}