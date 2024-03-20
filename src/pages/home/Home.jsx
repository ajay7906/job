
import JobList from '../../components/joblist/JobList'
import Layout from '../../components/layout/Layout'
import Navbar from '../../components/navbar/Navbar'
import Search from '../../components/search/Search'



function Home() {
  return (
    <div>
      <Layout>
       
        <Search />
        <JobList/>
       
      </Layout>




    </div>
  )
}

export default Home