import TopSearchBar from '../../components/navigation/TopSearchBar'
import DashboardLayout from '../../layouts/DashboardLayout'

const Explore = () => {
  return (
    <div>
      <DashboardLayout>
        <div className="">
          <TopSearchBar />
          <h1 className="text-2xl font-bold mt-4">Explore Page</h1>
        </div>
      </DashboardLayout>
    </div>
  )
}

export default Explore
