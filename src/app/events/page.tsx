import { Calendar, Users, MapPin } from "lucide-react"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import bootcamp from "../../../public/torv.jpg"
import elysium from "../../../public/elysium.jpg"
// Sample events data - you can replace this with your actual data source
const events = [
  {
    id: 1,
    title: "ELYSIUM",
    description:
      "An introduction to our club and starting a session on how to use Linux.",
    date: "2025-04-09",
    time: "14:00",
    location: "D Block, 4th Floor, AV Hall",
    attendees: 45,
    maxAttendees: 100,
    poster: elysium,
    category: "Workshop",
    status: "completed",
  },
  {
    id: 2,
    title: "Linux Bootcamp",
    description:
      "A bootcamp for helping student install linux on their laptops and get hands-on experience.",
    date: "2025-05-14",
    time: "14:00",
    location: "D-Block LAB-506",
    attendees: 14,
    maxAttendees: 50,
    poster: bootcamp,
    category: "Workshop",
    status: "completed",
  },
 

  

]

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function getStatusColor(status: string) {
  switch (status) {
    case "upcoming":
      return "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800"
    case "completed":
      return "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800/50 dark:text-gray-300 dark:border-gray-700"
    case "full":
      return "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800"
    default:
      return "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800"
  }
}

function getCategoryColor(category: string) {
  switch (category.toLowerCase()) {
    case "workshop":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
    case "hackathon":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
    case "masterclass":
      return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400"
    case "bootcamp":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400"
    case "security":
      return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-800/50 dark:text-gray-300"
  }
}

export default function EventsPage() {
  const upcomingEvents = events.filter((event) => event.status === "upcoming" || event.status === "full")
  const pastEvents = events.filter((event) => event.status === "completed")

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors">
      {/* Header */}
      <div className="bg-white dark:bg-neutral-900 shadow-sm border-b border-gray-200 dark:border-neutral-700 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Torvalds Club Events</h1>
            <ThemeToggle />

            <p className="text-xl text-gray-600 dark:text-neutral-300 max-w-3xl mx-auto">
              Join us for workshops, hackathons, and tech talks that push the boundaries of open source development and
              getting familiar with Linux.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Upcoming Events */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Upcoming Events</h2>
            <div className="ml-4 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full text-sm font-medium">
              {upcomingEvents.length} events
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg dark:shadow-black/20 overflow-hidden hover:shadow-xl dark:hover:shadow-black/40 transition-shadow duration-300 border border-gray-100 dark:border-neutral-700"
              >
                {/* Event Poster */}
                <div className="relative h-100 bg-gray-200 dark:bg-neutral-800">
                  <Image src={event.poster || "/placeholder.svg"} alt={event.title} fill className="object-cover"/>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(event.status)}`}
                    >
                      {event.status === "full" ? "Full" : "Open"}
                    </span>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">{event.title}</h3>

                  <p className="text-gray-600 dark:text-neutral-300 mb-4 line-clamp-3">{event.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500 dark:text-neutral-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>
                        {formatDate(event.date)} at {event.time}
                      </span>
                    </div>

                    <div className="flex items-center text-sm text-gray-500 dark:text-neutral-400">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>

                    <div className="flex items-center text-sm text-gray-500 dark:text-neutral-400">
                      <Users className="h-4 w-4 mr-2" />
                      <span>
                        {event.attendees}/{event.maxAttendees} attendees
                      </span>
                    </div>
                  </div>

                  {/* Attendee Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-500 dark:text-neutral-400 mb-1">
                      <span>Registration</span>
                      <span>{Math.round((event.attendees / event.maxAttendees) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-neutral-800 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          event.status === "full" ? "bg-red-500 dark:bg-red-600" : "bg-green-500 dark:bg-green-600"
                        }`}
                        style={{ width: `${Math.min((event.attendees / event.maxAttendees) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                      event.status === "full"
                        ? "bg-gray-100 dark:bg-neutral-800 text-gray-500 dark:text-neutral-400 cursor-not-allowed"
                        : "bg-blue-600 dark:bg-blue-700 text-white hover:bg-blue-700 dark:hover:bg-blue-600"
                    }`}
                    disabled={event.status === "full"}
                  >
                    {event.status === "full" ? "Event Full" : "Register Now"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section>
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Past Events</h2>
            <div className="ml-4 px-3 py-1 bg-gray-100 dark:bg-neutral-800/50 text-gray-800 dark:text-neutral-300 rounded-full text-sm font-medium">
              {pastEvents.length} events
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg dark:shadow-black/20 overflow-hidden opacity-75 hover:opacity-100 transition-opacity duration-300 border border-gray-100 dark:border-neutral-700"
              >
                {/* Event Poster */}
                <div className="relative h-100 bg-gray-200 dark:bg-neutral-800">
                  <Image
                    src={event.poster || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover grayscale dark:grayscale"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-neutral-800/50 text-gray-800 dark:text-neutral-300 border border-gray-200 dark:border-neutral-700">
                      Completed
                    </span>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">{event.title}</h3>

                  <p className="text-gray-600 dark:text-neutral-300 mb-4 line-clamp-3">{event.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500 dark:text-neutral-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>
                        {formatDate(event.date)} at {event.time}
                      </span>
                    </div>

                    <div className="flex items-center text-sm text-gray-500 dark:text-neutral-400">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>

                    <div className="flex items-center text-sm text-gray-500 dark:text-neutral-400">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full py-2 px-4 rounded-lg font-medium bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-neutral-400 cursor-default">
                    Event Completed
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
