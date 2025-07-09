"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { motion } from "framer-motion";
import { SearchX } from "lucide-react";


// API URL for the backend service. Uses environment variable or falls back to localhost.
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function App() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    url: "",
    summary: "",
    key_points: ""
  });

  /**
   * Fetches content from the provided URL using the backend API.
   * Adds the extracted data to the 'data' state.
   */
  const fetchContent = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/extract`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url })
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const result = await res.json();
      setData((prev) => [...prev, result]);
    } catch (error) {
      console.error("Error fetching content:", error);
    } finally {
      setLoading(false);
      setUrl("");
    }
  };

  /**
   * Checks if an item matches the global search query across its URL, summary, and key points.
   * @param {object} item - The data item to check.
   * @returns {boolean} - True if the item matches the search, false otherwise.
   */
  const matchesSearch = (item) =>
    (item.url + item.summary + item.key_points.join(" "))
      .toLowerCase()
      .includes(search.toLowerCase());

  // Filter the data based on global search and individual column filters
  const filteredData = data.filter(
    (item) =>
      matchesSearch(item) &&
      item.url.toLowerCase().includes(filters.url.toLowerCase()) &&
      item.summary.toLowerCase().includes(filters.summary.toLowerCase()) &&
      // Check if any key point matches the filter
      item.key_points.join(" ").toLowerCase().includes(filters.key_points.toLowerCase())
  );

  return (
    <main className="p-6 max-w-6xl mx-auto font-inter"> {/* Added font-inter for consistent styling */}
      <h1 className="text-3xl font-bold mb-4 text-gray-800">AI-powered Content Extractor</h1>
      <div className="flex gap-2 mb-6">
        <Input
          placeholder="Enter a public URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-grow rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        />
        <Button
          onClick={fetchContent}
          disabled={loading || !url}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-200 ease-in-out"
        >
          {loading ? "Extracting..." : "Extract"}
        </Button>
      </div>

      <Input
        placeholder="🔍 Search across all fields..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Card className="rounded-lg shadow-lg h-[350px]">
          <CardContent className="p-0 overflow-y-auto h-full rounded-lg">
            <Table className="min-w-full divide-y divide-gray-200">
              <TableHeader className="bg-gray-50">
                <TableRow>
                  <TableHead className="sticky top-0 bg-white z-10 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[250px]"> {/* Adjusted min-width for better display */}
                    URL
                    <Input
                      value={filters.url}
                      onChange={(e) => setFilters({ ...filters, url: e.target.value })}
                      placeholder="Filter by URL"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      onClick={(e) => e.stopPropagation()} // Prevent sort when clicking filter input
                    />
                  </TableHead>
                  <TableHead className="sticky top-0 bg-white z-10 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[350px]"> {/* Adjusted min-width */}
                    Summary
                    <Input
                      value={filters.summary}
                      onChange={(e) => setFilters({ ...filters, summary: e.target.value })}
                      placeholder="Filter by Summary"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </TableHead>
                  <TableHead className="sticky top-0 bg-white z-10 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[300px]"> {/* Adjusted min-width */}
                    Key Points
                    <Input
                      value={filters.key_points}
                      onChange={(e) => setFilters({ ...filters, key_points: e.target.value })}
                      placeholder="Filter by Key Points"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody className="bg-white divide-y divide-gray-200">
                {filteredData.length > 0 ? (
                  filteredData.map((item, index) => (
                    <TableRow key={index} className="hover:bg-gray-50 transition-colors duration-150">
                      <TableCell className="px-6 py-4 whitespace-normal text-sm font-medium text-blue-600">
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {item.url}
                        </a>
                      </TableCell>
                      <TableCell className="px-6 py-4 whitespace-normal text-sm text-gray-800">{item.summary}</TableCell>
                      <TableCell className="px-6 py-4 whitespace-normal text-sm text-gray-800">
                        <ul className="list-disc pl-4 space-y-1">
                          {item.key_points.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center py-8">
                      <div className="flex flex-col items-center justify-center text-muted-foreground text-gray-500">
                        <SearchX className="w-10 h-10 mb-2 text-gray-400" />
                        <p className="text-lg">No results match your search.</p>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
}